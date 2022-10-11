import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import D1 from "../images/director/bollywood/D1.jpg"
import D2 from "../images/director/bollywood/D2.jpg"
import D3 from "../images/director/bollywood/D3.jpg"
import D4 from "../images/director/bollywood/D4.jpg"
import D5 from "../images/director/bollywood/D5.jpg"
import D6 from "../images/director/bollywood/D6.jpg"
import D7 from "../images/director/bollywood/D7.jpg"
import D8 from "../images/director/bollywood/D8.jpeg"
import D9 from "../images/director/bollywood/D9.jpg"
import D10 from "../images/director/bollywood/D10.jpg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function BollywoodDirector() {
    const headerImgs = [
        {
            id:1,
            img:<img src={D1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={D2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={D3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={D4} alt="4" height={190} width={200} />
        },
    ]
    const producerlists = [
        {
            id : 1,
            img:<img src={D1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: "  Jeethu Joseph  ",
            description: "Writer | Drishyam ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Jeethu Joseph is an Indian film director, screenwriter, and producer who predominantly works in Malayalam cinema. He has also worked in a few Tamil and Bollywood films. Jeethu made his directional debut with the 2007 police procedural film Detective and later went on to direct five successful films.",
            list: "Top movies directed by Jeethu Joseph are : Drishyam 1 & 2, 12th Man, Oozham, The Body, Memories, My boss and many more"
        },
        {
            id : 2,
            img:<img src={D2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: " Rajkumar Hirani ",
            description: "Writer | PK ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "Rajkumar Hirani is an Indian film director and editor. Hirani has directed five Hindi films, including ",
            list: "Munna Bhai M.B.B.S., Lage Raho Munnabhai, 3 Idiots, PK and Sanju, and all of which have been commercial and critical successes. "
        },
        {
            id : 3,
            img:<img src={D3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: " Nitesh Tiwari ",
            description: "Writer | Dangal ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "Nitesh Tiwari is an Indian film director, screenwriter, and lyricist. he was born and raised in tiwari family at itarasi (city of madhy pradesh) .",
            list: "Top movies directed by Nitesh Tiwari are : Chillar Party, Bhoothnath Returns, Dangal, Chhichhore and many more"
        },
        {
            id : 4,
            img:<img src={D4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: " Sriram Raghavan ",
            description: "Writer | Andhadhun ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Sriram Raghavan was born on June 22, 1963 in Mumbai, Maharashtra, India. He is a writer and director Top movies directed by Sriram Raghavan are :",
            list: "Badlapur, Johnny Gaddaar, Andhadhun and many more"
        },
        {
            id : 5,
            img:<img src={D5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "  Sukumar  ",
            description: "Writer | Pushpa: The Rise - Part 1 ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Sukumar was born on January 11, 1971 in Razole, Andhra Pradesh, India. He is a writer and director, known for Pushpa: The Rise - Part 1 (2021). Other films directed by Sukumar :",
            list: "Jagadam, Arya 2, 100% Love, 1 - Nenokkadine, Nannaku Prematho, Rangasthalam and many more"
        },
        {
            id : 6,
            img:<img src={D6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: " S.S. Rajamouli ",
            description: "Writer | Bãhubali: The Beginning ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "S.S. Rajamouli was born on October 10, 1973 in Manvi, Karnataka, India. He is a writer and producer, known for Baahubali: The Beginning, Baahubali 2: The Conclusion and Eega. Other films are :",
            list: "Student No. 1, Simhadri, Sye, Chatrapathi, Yamadonga, Magadheera, Maryada Ramanna and many more   "
        },
        {
            id : 7,
            img:<img src={D7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: " Priyadarshan ",
            description: "Director | Oppam ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Priyadarshan was born on January 30, 1957 in Thiruvananthapuram, Kerala, India. He is a director and writer, known for Oppam, Bhool Bhulaiyaa and Kanchivaram. Other films are :",
            list: "Billu, De Dana Dan, Khatta Meetha, Rangrez, Geethanjali, Sila Samayangalil "
        },
        {
            id : 8,
            img:<img src={D8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "  Subhash Kapoor  ",
            description: "Writer | Jolly LLB 2 ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Subhash Kapoor is known for Jolly LLB 2 and Jolly LLB. Other movies directed by Subhash Kapoor are :",
            list: "Say Salaam India: 'Let's Bring the Cup Home, Phas Gaye Re Obama and many more"
        },
        {
            id : 9,
            img:<img src={D9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "  S. Shankar  ",
            description: "Writer | Enthiran ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "Shankar is an Indian film director and producer who works mainly in Tamil cinema. He started his career as an assistant director to SA Chandrasekar and now he is the highest paid director in the country. Top movies directed by S. Shankar :",
            list: "Gentleman, Indian, Mudhalvan, Nayak: The Real Hero, 2  and many more "
        },
        {
            id : 10,
            img:<img src={D10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Prakash Jha   ",
            description: " Director | Gangaajal ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "Prakash Jha was born on February 27, 1952 in Patna, Bihar, India. He is a director and producer, known for Gangaajal, Apaharan and Rajneeti. ",
            list: "Aarakshan, Chakravyuh, Satyagraha, Jai Gangaajal, Pareeksha  and many more "
        }
    ]
     const[data, setData] = useState(producerlists)  
     let c = 0
    // vote button onClick Function
    function voteBtnOnclick(event) {
        {data.map( voteUpdate => {
            if(event.currentTarget.id ==1) {
                c++
                return voteUpdate.voteCount = c
            }
            else if(event.currentTarget.id ==2) {
                c++
                return voteUpdate.voteCount = c
            }
        })}
    
    }
   

    return (
        <>
            <NavbarPage />
            <div className="producer-list-container">
                <div className="producer-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/director-list">Director List</Link> </p>
                    <h5>Vote for favourite <b>Bollywood Director List</b></h5>
                    <div className="movie-list-headerImgs">
                    <Row>
                        {headerImgs.map(headerImg => {
                            return(
                                <Col xs={6} lg={3}>
                                    <span> {headerImg.img} </span>
                                </Col>
                            )  
                        })}
                    </Row>
                    </div>
                    <p className="voteDirectionPar">Vote Below <RiArrowDropDownLine style={{width:"35px",height: "55px"}} /> </p>
                </div>
                <div className="producer-list">
                    <div className="producer-list-cover">
                        <h4>Top 10 best Bollywood  Directors </h4>
                        <p>
                            We all love movies and the one person who makes these movies such lovable are
                            the directors. These directors stay behind the camera, but manage everything
                            happening in front of the camera. Today, the directors have become a brand.
                            There was a time when audience watched the movie with the name of the lead
                            actors, but today, the audiences know their favourite directors and do not dare
                            to miss their favourite director's films. 
                            Here is the list of 10 best Bollywood directors.
                        </p>
                        <div className="listDiv">
                            <Row className="listRow">
                                {data.map(obj => {
                                    return(
                                        <Col xs={12} lg={6} className="listCol">
                                            <Row>
                                                <Col xs={6} className="list-img-Col"><div className="list-img">{obj.img}</div></Col>
                                                <Col xs={6} className="list-description-Col"  key={obj.id}>
                                                        <div className="list-name"> {obj.name}</div><br /> 
                                                        <div className="list-firstDescription"> {obj.description} </div> 
                                                        <div id={obj.id}>
                                                            <p className="voteCount" id={obj.id}> {obj.voteCount} </p>
                                                            <div className="votingImg"  id={obj.id} onClick={voteBtnOnclick}> {obj.voteImg} </div> 
                                                        </div>
                                                </Col>
                                            </Row>
                                            <div className="list-secondDescription"> {obj.secondDescription} {obj.list} </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default BollywoodDirector
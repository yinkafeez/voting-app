import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import D1 from "../images/director/nollywood/D1.jpg"
import D2 from "../images/director/nollywood/D2.jpg"
import D3 from "../images/director/nollywood/D3.jpg"
import D4 from "../images/director/nollywood/D4.jpg"
import D5 from "../images/director/nollywood/D5.jpg"
import D6 from "../images/director/nollywood/D6.jpg"
import D7 from "../images/director/nollywood/D7.jpg"
import D8 from "../images/director/nollywood/D8.jpg"
import D9 from "../images/director/nollywood/D9.jpg"
import D10 from "../images/director/nollywood/D10.jpg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function NollywoodDirector() {
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
            name: " Tunde Kelani ",
            description: "director | Saworo-Ide",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Tunde Kelani is a man whose sheer brilliance in film directing cannot be underestimated. TK, as this erudite director is fondly called, is not a man of many words, but his works speak for him, anytime, any day.",
            list: "Some of his blockbuster movies include: Saworo-Ide, Agogo Eewo, Abeni, Thunderbolt, and The Narrow Path. "
        },
        {
            id : 2,
            img:<img src={D2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Chico Ejiro",
            description: "director | Night us to Lagos",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "Chico Ejiro (born Chico Maziakpono in Isoko, Delta, Nigeria) is a Nigerian movie director and producer. He originally studied agriculture, and he was drawn into video production because Nigerians would not buy blank videocassettes.",
            list: "Some of his blockbuster movies include: Night us to Lagos, Open Marriage, OutKast, Deadly Desire, Paige, First Cut "
        },
        {
            id : 3,
            img:<img src={D3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Dare Olaitan",
            description: "director | Ojukokoro",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "Dare Olaitan made his directing debut with the genuinely funny, entertaining and exceptionally clever crime comedy “Ojukokoro”. Other films are",
            list: "Knockout Blessing, Dwindle, Ile Owo, Obara'm."
        },
        {
            id : 4,
            img:<img src={D4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Adim Williams",
            description: "Director | Joshua ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Adim Williams is Nigerian film director best known for his work on the Abuja Connection trilogy of films. He has worked extensively in the Nollywood film industry since 2002 directing some 28 pictures by the end of 2006.",
            list: "Some of his blockbuster movies include: Joshua, Mr Ibu in London, Crying Angel, Crisis in London, Blindfold 1 & 2 and many more  "
        },
        {
            id : 5,
            img:<img src={D5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Afam Okeke ",
            description: " Director | From Within ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Afam Okeke is another film director in Nigeria that we talk about. Afam has been in the industry for quite an age now and he is still waxing stronger in the industry in Nigeria. He is also an actor but very good in directing of films.",
            list: "Some of his blockbuster movies include: Secret Burden, Feel My Pain, Ladies Gang 1 & 2, White Hunters and many more"
        },
        {
            id : 6,
            img:<img src={D6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "Izu Ojukwu",
            description: " Writter | Power of 1 ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "After his success with ‘76 in 2016, Ojukwu had returned to the drawing board to work on another piece. He was presented with the opportunity to work on the story of African music star, 2face Idibia, in the Buckwyld produced advocacy movie, ‘Power of 1.’",
            list: "Other films are : Amina, Across the Niger, Alero's symphony, The Child, Nnenda and many more"
        },
        {
            id : 7,
            img:<img src={D7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: " Francis Okonkwo ",
            description: "director | 3some",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Francis Okonkwo is a wave-making artiste with great expression of versatility in the world of arts. Francis Okonkwo is a producer of many movies. In terms of directing films, he has made a landmark for himself in the industry.",
            list: "One among such is the movie titled 3some. The flick was produced by a Nollywood sultry actress, Tonto Dikeh. The movie portrayed the depth of lesbianism in the industry. "
        },
        {
            id : 8,
            img:<img src={D8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "  Kunle Afolayan ",
            description: "director | The figurine",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Kunle Afolayan is a double award winner. As an actor, he is a force to appreciate and in terms of film production, he has never left a stone unturned in fishing out a real life story and diverting it into make believe.",
            list: "Some of his blockbuster movies include: The figurine, Phone Swap, Citation, October 1, Mokalik, The CEO and many more"
        },
        {
            id : 9,
            img:<img src={D9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " Tope Oshin ",
            description: "director | Up North ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "Tope Oshin has made her impact felt in the Nigerian movie and film industry from TV screens to cinema screens.",
            list: "Some of his blockbuster movies include: We don’t live here anymore, New Money and so on"
        },
        {
            id : 10,
            img:<img src={D10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Kemi Adetiba  ",
            description: "director | The wedding party 1 & 2",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "2018 was indeed a very awesome year for the wedding Party I director- Kemi Adetiba. She held the later part of the year spellbound with her movie, King of Boys which had Sola Sobowale sitting on the throne.",
            list: "Other films are : The wedding party 2, series sequel. "
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
                    <h5>Vote for favourite <b>Nollywood Director List</b></h5>
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
                        <h4>Top 10 best Nollywood Director </h4>
                        <p>
                            We are witnessing what could be called the golden age of the Nigerian movie 
                            industry; an era of filmmakers creating phenomenal features that are getting
                            the country the attention that it needs. These storytellers are defying the 
                            norm and exceeding boundaries, and it is only fitting that they are given the 
                            recognition they deserve.
                            These directors are behind some of the most successful and remarkable films in 
                            the nation's history. The uniqueness of their craft and their attention to detail 
                            has earned them a place in the list of the top filmmakers in the country. 
                            Below are top 10 best Nollywood director
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
export default NollywoodDirector
import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import D1 from "../images/director/korea/D1.jpg"
import D2 from "../images/director/korea/D2.jpg"
import D3 from "../images/director/korea/D3.jpeg"
import D4 from "../images/director/korea/D4.jpg"
import D5 from "../images/director/korea/D5.jpg"
import D6 from "../images/director/korea/D6.jpg"
import D7 from "../images/director/korea/D7.jpg"
import D8 from "../images/director/korea/D8.jpg"
import D9 from "../images/director/korea/D9.jpg"
import D10 from "../images/director/korea/D10.jpg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function KoreaDirector() {
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
            name: "  Park Chan-wook  ",
            description: "Producer | Ah-ga-ssi ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Park Chan-wook was born on August 23, 1963 in Seoul, South Korea. He is a producer and director, known for The Handmaiden (2016), Oldboy (2003) and Thirst (2009). ",
            list: "Other movies are: Decision to Leave, Life is But a Dream, Decades Apart, The Brigands of Rattlecreek and many more"
        },
        {
            id : 2,
            img:<img src={D2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: " Bong Joon Ho ",
            description: "Writer | Snowpiercer ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "Bong Joon-ho is a South Korean filmmaker. The recipient of three Academy Awards, his filmography is characterized by emphasis on social themes, genre-mixing, black humor, and sudden tone shifts.",
            list: "Some of his best movies include: Parasite, Okja, Mickey7, The Host, Parasite, Mother and so on."
        },
        {
            id : 3,
            img:<img src={D3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: " Kim Ki-duk ",
            description: "Writer | Bin-jip ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "He studied fine arts in Paris in 1990-1992. In 1993 he won the award for Best Screenplay from the Educational Institute of Screenwriting with A Painter and A Criminal Condemned to Death. After two more screenplay awards, he made his directorial debut with Crocodile ",
            list: "Other movies include: Dissolve, Human,Space,Time and Human, Call of God, Who is God and many more"
        },
        {
            id : 4,
            img:<img src={D4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: " Jee-woon Kim ",
            description: "Director |  Joheunnom nabbeunnom isanghannom ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Kim Ji-woon was born in Seoul, South Korea. He began his career as an actor before becoming a stage director with productions such as Hot Sea in 1994 and Movie, Movie in 1995.",
            list: "Other movies include: illang: The Wolf Brigade, Cobweb, Live Your Strength, Present and many more."
        },
        {
            id : 5,
            img:<img src={D5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "  Lee Chang-dong  ",
            description: "Writer | Beoning ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Lee Chang-Dong was born in 1954 in Daegu, which some consider the most right-wing city in South Korea. Lee is a former high-school teacher and an acclaimed novelist. He turned to cinema when he was over 40 years old. His debut film Green Fish (1997) brought immediate success.",
            list: "Some of his best movies include: Burning, Heartbeat, Secret Sunshine, Peppermint Candy and many more"
        },
        {
            id : 6,
            img:<img src={D6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: " Jae-young Kwak ",
            description: "Writer | Yeopgijeogin geunyeo ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "Jae-young Kwak was born on May 22, 1959 in South Korea. He is a writer and director, known for My Sassy Girl (2001), Cyborg She (2008) and The Piano in a Factory (2010). ",
            list: "Other films include: A Year-End Mendley, Colors Of Wind, Time Renegades and many more."
        },
        {
            id : 7,
            img:<img src={D7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: " Na Hong-jin ",
            description: "Writer | Chugyeokja ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Na Hong-jin born in 1974 is a South Korean film director and screenwriter. His debut film The Chaser (2008) won Best Director at the 45th Grand Bell Awards in 2008. ",
            list: "Other films include: The Wailing Writer, The Yellow Sea, Sweat and many more."
        },
        {
            id : 8,
            img:<img src={D8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " Im Kwon-taek ",
            description: "Director | Chunhyangdyun ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Born in Changsong, Cheollanam-do, 2 May 1936. He grew up in the southern city Kwangju, where he completed senior high school.",
            list: "Some of his best movies include: Yogeom, The Regular Tardy Student, Naneum wang-ida, Don't torture me anymore, Bigeom, The two revengeful hunchbacks and many more"
        },
        {
            id : 9,
            img:<img src={D9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "  Shin Sang-ok  ",
            description: "Producer | Sarangbang sonnimgwa eomeoni ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "Shin alleged that he and his wife were kidnapped from their native South Korea in the late 1970s and held for several years in North Korea to make movies for Kim Jong Il, son of the N. Korean leader. Shin Sang-ok sought asylum in the United States in 1986 shortly before the film Pulgasary was relesed.",
            list: "Other films include: The Evil Night, Rose and Wild Dog, Star of Korea, The Ghost Lovers, Prisoner 407 and many more"
        },
        {
            id : 10,
            img:<img src={D10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Ha Yoo   ",
            description: "Director | Biyeolhan geori",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "Ha Yoo is known for A Dirty Carnival (2006), A Frozen Flower (2008) and The Captain of Korea under Japanese rule (2019). ",
            list: ""
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
                    <h5>Vote for favourite <b>Korea Movie Directors List</b></h5>
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
                        <h4>Top 10 best Korea movie directors </h4>
                        <p>
                        South Korean film industry is one of the top 5 film industries in the whole world! 
                        It is astonishing and beautiful because of great actors, great actresses and, of 
                        course, because of brilliant and visionary directors & screenwriters. 
                        I listed 10 names here, most of them also being screenwriters. The first six 
                        listed here are among the 100 directors of all time and I think my conclusions are 
                        objective!
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
export default KoreaDirector
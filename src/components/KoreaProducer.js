import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import P1 from "../images/producer/korea/P1.jpeg"
import P2 from "../images/producer/korea/P2.jpeg"
import P3 from "../images/producer/korea/P3.jpg"
import P4 from "../images/producer/korea/P4.jpeg"
import P5 from "../images/producer/korea/P5.jpeg"
import P6 from "../images/producer/korea/P6.jpeg"
import P7 from "../images/producer/korea/P7.jpeg"
import P8 from "../images/producer/korea/P8.jpeg"
import P9 from "../images/producer/korea/P9.jpeg"
import P10 from "../images/producer/korea/P10.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function KoreaProducer() {
    const headerImgs = [
        {
            id:1,
            img:<img src={P1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={P2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={P3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={P4} alt="4" height={190} width={200} />
        },
    ]
    const producerlists = [
        {
            id : 1,
            img:<img src={P1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: " Bong Joon-ho ",
            description: "Producer | The Host",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Bong Joon-ho is probably the best filmmaker to come out of South Korea. His films are not only financial successes, but usually highly adored by cinephiles and fans from around the world.",
            list: "Top movies produced by Bong Joon-ho are: The Host, Snowpiercer, Memories of Murder and many more"
        },
        {
            id : 2,
            img:<img src={P2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Park Chan-wook",
            description: "Producer | J.S.A. : Joint Security Area",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "He is responsible for the most popular South Korean film of all-time, Park Chan-wook’s name gets most cinephiles riled up.",
            list: "Top movies produced by Park Chan-wook are: J.S.A. : Joint Security Area, Threesome, The Trial(Judgement), Oldboy and many more. "
        },
        {
            id : 3,
            img:<img src={P3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Kim Jee-woon",
            description: "Producer | A Tale of Two Sisters",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: " If any South Korean filmmaker plays with genre conventions in interesting ways, than it’s Kim Jee-woon. Almost all his films are a unique spin on a genre film, rather than keeping one distinct style to operate within other genres.1",
            list: "The producer has given successful movies like : A Tale of Two Sisters, The Quiet Family, The Foul King, A Bittersweet Life"
        },
        {
            id : 4,
            img:<img src={P4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Lee Chang-dong",
            description: "Producer | Poetry ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Lee Chang-dong has had pretty interesting career for someone who makes these incredibly intimate, humanistic films. Early in his career he worked in theater, as a high-school teacher, and even a novelist. Lee eventually got into filmmaking by writing scripts during his early 40s. ",
            list: "The producer has given successful movies like : Green Fish, Peppermint Candy, Poetry "
        },
        {
            id : 5,
            img:<img src={P5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Hong Sang-soo ",
            description: "Producer | Hahaha",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "No other filmmaker is more arthouse and independent in South Korea than Hong Sang-soo. For almost two decades, Hong has only made incredibly personal films that are niche and academic, many times focusing and criticizing South Korea’s independent art scene.",
            list: "The producer has given successful movies like : Hahaha, On the Occasion of Remembering the Turning Gate and many more"
        },
        {
            id : 6,
            img:<img src={P6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "Kim Ki-duk",
            description: "Producer | 3-Iron",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "Kim Ki-duk’s path towards filmmaking is quite different from his contemporaries. For starters, the man dropped out of school at 15 and worked hard labor until he was old enough to join the military. He started art in France for a few years, before finally making his debut film in 1996 entitled “Crocodile.” Since then, Kim has made 20 films and earned a reputation for being a somewhat vulgar filmmaker.",
            list: "Top movies produced by Kim Ki-duk are: 3-Iron, Pieta and so on"
        },
        {
            id : 7,
            img:<img src={P7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Ha Yoo",
            description: "Producer | A Dirty Carnival",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "He started as an award-winning poet, going on to direct his first feature in 1993 that’s actually based on a collection of his work. His later films get more and more mainstream. ",
            list: "The Producer has given films like : Gangnam Blues, Once Upon a Time in High School , A Dirty Carnival "
        },
        {
            id : 8,
            img:<img src={P8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " Ryoo Seung-wan ",
            description: "Producer | Die Bad",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Ryoo Seung-wan is South Korea’s premiere action filmmaker. Ever since the man laid eyes on Jackie Chan as a child in “Drunken Fist,” Ryoo dedicated his life to making action films. Top films produced by Ryoo Seung-wan :",
            list: "Veteran, The Unjust, Busan Bound, City of Violence, Crying Fist and many more."
        },
        {
            id : 9,
            img:<img src={P9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " Choi Dong-hoon ",
            description: "Producer | The Assassination",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "After graduation The Korean Academy of Film Arts, Choi Dong-hoon got his start in the industry as an assistant director to Im San-soo, responsible for erotic thrillers such as “The Housemaid” and “A Good Lawyer’s Wife.” His 2004 debut “The Big Swindle” brought a different type of energy to the heist/con genre. Other films produced by Choi Dong-hoon are : ",
            list: "Tazza: The High Rollers, The Thieves, Woochi, The Assassination and many more."
        },
        {
            id : 10,
            img:<img src={P10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Kim Han-min  ",
            description: "Producer | The Admiral: Roaring Currents",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "Another graduate of Dongguk University, Kim Han-min started as a short film director, making six over the course of eight years (1995-2003). In 2007, he found modest success with his rural mystery thriller Paradise Murdered. Other films are : ",
            list: "War of the Arrows, Handphone, The Chaser, The Yellow Sea, and many more  ."
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
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/producer-list">Producer List</Link> </p>
                    <h5>Vote for favourite <b>Korea Movie Producer List</b></h5>
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
                        <h4> Here is the list of top 10 best Korea movie producers </h4>
                        <div className="listDiv">
                            <Row className="listRow">
                                {data.map(obj => {
                                    return(
                                        <Col xs={12} lg={6} className="listCol">
                                            <Row>
                                                <Col xs={6} className="list-img-Col"><div className="list-img">{obj.img}</div></Col>
                                                <Col xs={6} className="list-description-Col"  key={obj.id}>
                                                        <div className="list-name">  {obj.name}</div><br /> 
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
export default KoreaProducer
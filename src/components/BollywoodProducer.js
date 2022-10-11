import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import P1 from "../images/producer/bollywood/P1.jpeg"
import P2 from "../images/producer/bollywood/P2.jpg"
import P3 from "../images/producer/bollywood/P3.jpg"
import P4 from "../images/producer/bollywood/P4.jpg"
import P5 from "../images/producer/bollywood/P5.jpg"
import P6 from "../images/producer/bollywood/P6.jpg"
import P7 from "../images/producer/bollywood/P7.jpg"
import P8 from "../images/producer/bollywood/P8.jpg"
import P9 from "../images/producer/bollywood/P9.jpeg"
import P10 from "../images/producer/bollywood/P10.jpg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function BollywoodProducer() {
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
            name: " Ronnie Screwvala ",
            description: "Producer | Chennai Express",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "He has given several movies like :",
            list: "Such a Long Journey, Lakshya, Hattrick,  The Blue Umbrella, Aamir, Fashion, Chillar Party, Thank You, 7 Khoon Maaf, Chennai Express, Kedarnath, Uri: The Surgical Strike, Dhamaka and many more."
        },
        {
            id : 2,
            img:<img src={P2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Aditya Chopra",
            description: "Producer | Sultan",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "Aditya Chopra the Chairman of Yash Raj Films. Top films produced by Aditya Chopra : ",
            list: "Veer-Zaara, Chak De! India , Mohabbatein, Sultan (2016 film)."
        },
        {
            id : 3,
            img:<img src={P3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Sooraj Barjatya",
            description: "Producer | Maine Pyar Kiya",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "The producer has given successful movies like : ",
            list: " Maine Pyaar Kiya, Prem Ratan Dhan Paayo, Hum Saath Saath Hain, Vivah, Main Prem Ki Deewani Hoon, Love You, Mr Artist, In This Life, Hum Chaar, and many more."
        },
        {
            id : 4,
            img:<img src={P4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Ekta Kapoor",
            description: "Writter | KumKum Bhagya",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Ekta Kapoor is an Indian television producer, film producer and director who is the co-owner of Balaji Telefilms  founded in 1994. Top films under Balaji Telefims are : : ",
            list: "Shootout at Lokhandwala, Once Upon a Time in Mumbaai, The Dirty Picture, Main Tera Hero, Udta Punjab, Veere Di Wedding."
        },
        {
            id : 5,
            img:<img src={P5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Aamir Khan ",
            description: "Actor | Taare Zameen Par",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Aamir Khan is an Indian actor, film director, producer who started his career as a child artist. In 1999, he started his production  Aamir Khan Productions and Lagaan was the first film under AK Productions. Top films of AK Productions are :",
            list: "Lagaan, Taare Zameen Par, Dangal, Secret Superstar."
        },
        {
            id : 6,
            img:<img src={P6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "Karan Johar",
            description: "Writer | Kuch Kuch Hota Hai",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "Karan Johar often referred to as KJo and presently the owner of Dharma Productions which was founded by Yash Johar in 1979. The production's turning point was with the release of Kuch Kuch Hota Hai. Top films produced by Karan Johar are :",
            list: "Kuch Kuch Hota Hai, Kabhi Khushi Kabhie Gham ,  Kal Ho Naa Ho , Yeh Jawaani Hai Deewani."
        },
        {
            id : 7,
            img:<img src={P7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Anil Ambani",
            description: "Producer | Rustom",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Anil Ambani is serving as the chairman of Reliance Entertainment Private Limited . The company deals with web series, films, animations, gaming, etc. Reliance Entertainment has given many films like : ",
            list: "The Race Against Time, Guru, Namaste London, Hulla, Ghajini, 3 Idiots, Well Done Abba, Rustom, Shivaay."
        },
        {
            id : 8,
            img:<img src={P8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " Ritesh Sidhwani ",
            description: "Producer | Gully Boy",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Ritesh Sidhwani the co-owner of Excel Entertainment which is among the best production house companies in Mumbai. Founded in 1991, and into producing and film distribution since 2001 with Dil Chahta Hai. Top best films under Excel Entertainment :",
            list: "Dil Chahta Hai, Don, Don2, Zindagi Na Milegi Dobara,  Gully Boy, Raees, Inside Edge."
        },
        {
            id : 9,
            img:<img src={P9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " Farhan Akhtar ",
            description: "Producer | Zindagi Na Milegi Dobara",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "Farhan Akhtar is the Indian film director, producer, actor, screenwriter, playback singer. Along with Ritesh Sidhwani, he has established his production company Excel Entertainment. Dil Chahta Hai in 2001 was the film Farhan Akhtar have directed as well as produced. Top best films Farhan Akhtar has produced :",
            list: "Dil Chahta Hai, Bhaag Milkha Bhaag, Zindagi Na Milegi Dobara, Toofan and many more."
        },
        {
            id : 10,
            img:<img src={P10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Sajid Nadiadwala  ",
            description: "Producer | Kick",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "Sajid Nadiadwala the owner of Nadiadwala Grandson Entertainment. In 1992, he produced his first film 'Zulm Ki Hukumat'. Some top best hit films under Nadiadwala Grandson Entertainment : ",
            list: "Mujhse Shaadi Karogi, Judwaa, Judwaa 2, Housefull series, Super 30, Baaghi."
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
                    <h5>Vote for favourite <b>Bollywood Producer List</b></h5>
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
                        <h4>Top 10 best bollywood producers </h4>
                        <p>
                            In Indian cinema,Bollywood plays a vital role and is one of the most popular 
                            industry in the world. The films are financed by the producers where many wind 
                            up due to heavy while many become successful. Presenting the top 10 best 
                            Bollywood producers in recent times.
                        </p>
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
export default BollywoodProducer
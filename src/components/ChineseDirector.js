import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import D1 from "../images/director/chinese/D1.jpeg"
import D2 from "../images/director/chinese/D2.jpg"
import D3 from "../images/director/chinese/D3.jpg"
import D4 from "../images/director/chinese/D4.jpg"
import D5 from "../images/director/chinese/D5.jpg"
import D6 from "../images/director/chinese/D6.jpg"
import D7 from "../images/director/chinese/D7.jpg"
import D8 from "../images/director/chinese/D8.jpg"
import D9 from "../images/director/chinese/D9.jpg"
import D10 from "../images/director/chinese/D10.jpg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function ChineseDirector() {
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
            name: " Ang Lee ",
            description: "Director |  Life of Pi",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "One of the greatest contemporary filmmakers, Ang Lee has produced many award-winning works such as  ",
            list: "Crouching Tiger, Hidden Dragon, The Wedding Banquet and many more"
        },
        {
            id : 2,
            img:<img src={D2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Chen Kaige",
            description: "Director | Farewell My Concubine",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "A central figure among China’s Fifth Generation filmmakers, Chen Kaige is a cinematic artist whose works question notions of Chinese nationalism, politics and identity – a critique that the Chinese government strongly disapproves of. ",
            list: "Some of his blockbuster movies include: Sacrifice, Snipers, Shuzhen, Caught in the Web, The Battle at Lake Changjin, Water Gate Bridge and many more."
        },
        {
            id : 3,
            img:<img src={D3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Feng Xiaogang",
            description: "Director | Mr. Six",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "A master of family-friendly comedies, Feng Xiaogang consistently conquers the box office as the most successful and popular filmmaker of mainstream motion pictures in China. ",
            list: "Some of his blockbuster movies include: A World without Thives, Youth, Personal Tailor, The Blanquet, I Am Not Madame Bovary and many more "
        },
        {
            id : 4,
            img:<img src={D4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Hou Hsiao-hsien",
            description: "Director | Three Times",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Praised for being one of the most fundamentally important directors in the evolution of modern Chinese cinema.",
            list: "Some of his movies include: Baby, Father to Son, Father, Mirror image, One Day, Borderline and many more."
        },
        {
            id : 5,
            img:<img src={D5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Jia Zhangke ",
            description: "Director | White Building",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "His works focus on political, economic, moral and social changes that have influenced the lives of individuals at grassroots levels. ",
            list: "Some of his movies include: Memoria, A Song For You, The Calming, Half The Sky, Dead Pigs, Life After Life and many more"
        },
        {
            id : 6,
            img:<img src={D6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "John Woo",
            description: "Director | A better Tomorrow",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "The first Asian producer in history to make a widespread, globally popular Hollywood film, John Woo is internationally respected for his depictions of extreme violence and edge-of-your-seat thrillers. ",
            list: "Some of his movies include: Once A Thief, Red Cliff, Hard Boiled, Manhunt, The Crossing 1 & 2, Reign of Assassins and many more."
        },
        {
            id : 7,
            img:<img src={D7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Tian Zhuangzhuang",
            description: "Director | Delamu",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "As one of the greatest contributors to China’s ‘New Wave’ cinema, Tian Zhuangzhuang challenges the authority of the Chinese Communist party by showing the destruction it has caused in the past. ",
            list: "Some of his best movies include: The Go Master, Lady of the Dynasty, Born to Fly, Nice View, Bipolar and many more."
        },
        {
            id : 8,
            img:<img src={D8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " Tsui Hark ",
            description: "Director | Iron Monkey",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Tsui Hark is a filmmaking visionary, artistically combining elements of kung-fu action, Chinese storytelling and Hollywood-style special effects to create a new genre known as ‘wuxia,’ which has developed into a prominent cinematic style. ",
            list: "Other films are: Wicked City, The Era of Vampires, The Taking Of Tiger Mountain and many more"
        },
        {
            id : 9,
            img:<img src={D9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " Wong Kar-wai ",
            description: "Writer | 2046 ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "The first Chinese filmmaker ever to win the Best Director Award at the Cannes Film Festival in 1997, Wong Kar-wai is a cinematic genius famous for his lengthy production process, often lasting over a year. ",
            list: "Some of his best movies include: The Grandma, In the Mood for Love, Deja Vu, One-Tenth of a Millimeter Apart and many more"
        },
        {
            id : 10,
            img:<img src={D10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Zhang Yimou  ",
            description: "Director | Hero",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "One of the core members of China’s Fifth Generation – those who created films subsequent to the Cultural Revolution – Zhang Yimou is highly praised internationally for his aesthetically detailed visuals.",
            list: "Some of his best movies include: Beijing 2022, Curse of the Golden Flower, Snipers and many more."
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
                    <h5>Vote for favourite <b>Chinese Movie Directors List</b></h5>
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
                        <h4>Top 10 best Chinese movie Directors </h4>
                        <p>
                            Chinese movies only came to international attention in the 1980s, with the 
                            lavish visuals and powerful stories of such Fifth Generation directors as 
                            Zhang Yimou and Chen Kaige. Neighboring Taiwan also found its cinematic voice 
                            around this time, courtesy of Ang Lee. 
                            Here is a list of the 10 best Chinese movie directors of all time.
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
export default ChineseDirector
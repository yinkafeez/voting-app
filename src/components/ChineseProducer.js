import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import P1 from "../images/producer/chinese/P1.jpeg"
import P2 from "../images/producer/chinese/P2.jpeg"
import P3 from "../images/producer/chinese/P3.jpeg"
import P4 from "../images/producer/chinese/P4.jpg"
import P5 from "../images/producer/chinese/P5.jpeg"
import P6 from "../images/producer/chinese/P6.jpeg"
import P7 from "../images/producer/chinese/P7.jpeg"
import P8 from "../images/producer/chinese/P8.jpeg"
import P9 from "../images/producer/chinese/P9.jpeg"
import P10 from "../images/producer/chinese/P10.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function ChineseProducer() {
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
            name: " Stephen Chow ",
            description: "Producer | Shaolin soccer",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Award wining Hong Kong filmmaker Chow, 55, is best known around the world as the star and director of the hit action comedies SHOALIN SOCCER, released in 2001 and 2004's KUNG FU HUSTLE. Other movies produced by Stephen Chow are: ",
            list: "The Mermaid, Wolf Warrior etc."
        },
        {
            id : 2,
            img:<img src={P2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Tsui Hark",
            description: "Producer | Seven Swords",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "The Vietnamese-born Chinese film director, who moved to Hong Kong as a teenager, is best known for his epic and martial art action films. List of movies he has produced are:  ",
            list: "Once Upon a Time in China, Seven Swords ,The Taking of Tiger Mountain and many more. "
        },
        {
            id : 3,
            img:<img src={P3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Ang Lee",
            description: "Producer | Brokeback Mountain",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "Taiwanese-born Lee, who also studied film in the US, is the first Asian winner of the American Academy Award for best director. The producer has given successful movies like : ",
            list: "Brokeback Mountain,Life of Pi, Thriller Lust, Caution, Crouching Tiger, Hidden Dragon and many more."
        },
        {
            id : 4,
            img:<img src={P4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Jiang Wen",
            description: "Producer | Let the Bullet Fly",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "He is well known for his devotion to his craft, rather than concerning himself too much about the commercial success of his film. He certainly enjoyed box-office success with his big-budget 2010 action comedy, Let The Bullets Fly. ",
            list: ""
        },
        {
            id : 5,
            img:<img src={P5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Feng Xiaogang ",
            description: "producer | I Am Not Madame Bovary,",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "The Beijing-born producer has enjoyed both box-ofice and critical success with his work, but is not afraid to challenge commercialism with the choice of subjects for his film. Some movies produced by Feng Xiaogang : ",
            list: "I Am Not Madame Bovary, If You Are The One, If You Are The One 2 and so on."
        },
        {
            id : 6,
            img:<img src={P6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "Zhang Yimou",
            description: "producer | The Great Wall",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "Top Movies produced by Zhang Yimou :",
            list: "The Flowers of War, House Of Flying Daggers, and Curse Of The Golden Flower."
        },
        {
            id : 7,
            img:<img src={P7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Chen Kaige",
            description: "Producer | Killing Me Softly",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "He is known for his films featuring great social realism, visual flair and epic storytelling. Some films produced by Chen Kaige are :",
            list: "The Emperor and the Assassin, Killing Me Softly and many more"
        },
        {
            id : 8,
            img:<img src={P8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " Wuersha ",
            description: "Producer | Mojin: The Lost Legend",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "The ethnic Mongolian filmmaker, who has only one name, likes to include the elements of Chinese history, fantasy, folklore and mythology in his films. Movies produced by Wuersha are :",
            list: "Painted Skin: The Resurrection, The Butcher, the Chef and the Swordsman."
        },
        {
            id : 9,
            img:<img src={P9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " Ning Hao ",
            description: "Producer | Crazy Stone",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "Top movies produced by Ning Hao :",
            list: "Crazy Stone, No Man’s Land and many more."
        },
        {
            id : 10,
            img:<img src={P10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Wu Jing  ",
            description: "Producer | Wolf Warrior 1 & 2",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "Top movies produced by Wu Jing : ",
            list: "Wolf Warrior, Wolf Warrior 2."
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
                    <h5>Vote for favourite <b>Chinese Movie Producer List</b></h5>
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
                        <h4>Here is the list of top 10 best Chinese movie producers </h4>
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
export default ChineseProducer
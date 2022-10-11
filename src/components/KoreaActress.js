import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import K1 from "../images/people/actress/korea/K1.jpeg"
import K2 from "../images/people/actress/korea/K2.jpeg"
import K3 from "../images/people/actress/korea/K3.jpeg"
import K4 from "../images/people/actress/korea/K4.jpg"
import K5 from "../images/people/actress/korea/K5.jpeg"
import K6 from "../images/people/actress/korea/K6.jpeg"
import K7 from "../images/people/actress/korea/K7.jpeg"
import K8 from "../images/people/actress/korea/K8.jpeg"
import K9 from "../images/people/actress/korea/K9.jpeg"
import K10 from "../images/people/actress/korea/K10.jpg"
import K11 from "../images/people/actress/korea/K11.jpeg"
import K12 from "../images/people/actress/korea/K12.jpeg"
import K13 from "../images/people/actress/korea/K13.jpeg"
import K14 from "../images/people/actress/korea/K14.jpeg"
import K15 from "../images/people/actress/korea/K15.jpeg"
import K16 from "../images/people/actress/korea/K16.jpeg"
import K17 from "../images/people/actress/korea/K17.jpeg"
import K18 from "../images/people/actress/korea/K18.jpeg"
import K19 from "../images/people/actress/korea/K19.jpeg"
import K20 from "../images/people/actress/korea/K20.jpeg"
import K21 from "../images/people/actress/korea/K21.jpeg"
import K22 from "../images/people/actress/korea/K22.jpeg"
import K23 from "../images/people/actress/korea/K23.jpeg"
import K24 from "../images/people/actress/korea/K24.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function KoreaActress() {

    const headerImgs = [
        {
            id:1,
            img:<img src={K1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={K2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={K3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={K4} alt="4" height={190} width={200} />
        },
    ]

    const producerlists = [
        {
            id : 1,
            img:<img src={K1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: "   Song Hye-kyo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={K2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Park Shin-hye  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={K3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Jun Ji-hyun  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={K4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Bae Suzy  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={K5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Son Ye-jin   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={K6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  IU  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={K7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Han Hyo-joo  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={K8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Park Min-young   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={K9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Kim Tae-hee   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={K10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Kim So-hyun   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={K11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ha Ji-won    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={K12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kim Go-eun  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={K13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kim Yoo-jung   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={K14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Park Bo-young   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={K15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Seo Yea-ji  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={K16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Lee Sung-kyung  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={K17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Shin Min-a   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={K18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kim Ji-won   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={K19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Gong Hyo-jin   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={K20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Choi Ji-woo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={K21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Lee Young-ae   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={K22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Moon Chae-won   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={K23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Yoon Eun-hye   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={K24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Han Ji-min   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },

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

    return(
        <>
            <NavbarPage />
            <div className="producer-list-container">
                <div className="producer-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/people-list">People List</Link> </p>
                    <h5>Vote for favourite <b>Korea Movies Actresses List</b></h5>
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
            </div>

            <div className="people-list">
                    <div className="people-list-cover">
                        <h4>Top 24 best Korean Actresses </h4>
                        
                        <div className="peopleListDiv">
                            <Row className="peopleListRow">
                                {data.map(obj => {
                                    return(
                                        <Col xs={6} sm={4} lg={3} xl={2} className="people-listCol">
                                            <div className="people-listDiv">
                                                <div className="people-list-img">{obj.img}</div>
                                                <div className="people-list-name"> {obj.name}</div><br /> 
                                                <div id={obj.id}>
                                                    <div className="people-voteCount" id={obj.id}> {obj.voteCount} </div>
                                                    <div className="people-votingImg"  id={obj.id} onClick={voteBtnOnclick}> {obj.voteImg} </div> 
                                                </div>
                                            </div>
                                           
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default KoreaActress
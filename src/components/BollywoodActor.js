import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import B1 from "../images/people/actor/bollywood/B1.jpg"
import B2 from "../images/people/actor/bollywood/B2.jpg"
import B3 from "../images/people/actor/bollywood/B3.jpg"
import B4 from "../images/people/actor/bollywood/B4.jpg"
import B5 from "../images/people/actor/bollywood/B5.jpg"
import B6 from "../images/people/actor/bollywood/B6.jpeg"
import B7 from "../images/people/actor/bollywood/B7.jpg"
import B8 from "../images/people/actor/bollywood/B8.jpeg"
import B9 from "../images/people/actor/bollywood/B9.jpeg"
import B10 from "../images/people/actor/bollywood/B10.jpg"
import B11 from "../images/people/actor/bollywood/B11.jpeg"
import B12 from "../images/people/actor/bollywood/B12.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function BollywoodActor() {

    const headerImgs = [
        {
            id:1,
            img:<img src={B1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={B2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={B3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={B4} alt="4" height={190} width={200} />
        },
    ]

    const producerlists = [
        {
            id : 1,
            img:<img src={B1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: "   Aamir Khan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={B2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Akshay Kumar  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={B3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Ajay Devgn  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={B4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Shah Rukh Khan  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={B5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Amitabh Bachchan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={B6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Allu Arjun  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={B7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Manoj Bajpayee  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={B8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Ram Charan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={B9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Rajkummar Rao   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={B10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Ayushmann Khurrana   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={B11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Salman Khan    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={B12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Hrithik Roshan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
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

    return(
        <>
            <NavbarPage />
            <div className="producer-list-container">
                <div className="producer-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/people-list">People List</Link> </p>
                    <h5>Vote for favourite <b>Bollywood Male Actors List</b></h5>
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
                        <h4>Top 12 best Bollywood Male Actors </h4>
                        
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

export default BollywoodActor
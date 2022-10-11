import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import H1 from "../images/people/actor/hollywood/H1.jpeg"
import H2 from "../images/people/actor/hollywood/H2.jpeg"
import H3 from "../images/people/actor/hollywood/H3.jpeg"
import H4 from "../images/people/actor/hollywood/H4.jpeg"
import H5 from "../images/people/actor/hollywood/H5.jpeg"
import H6 from "../images/people/actor/hollywood/H6.jpeg"
import H7 from "../images/people/actor/hollywood/H7.jpeg"
import H8 from "../images/people/actor/hollywood/H8.jpeg"
import H9 from "../images/people/actor/hollywood/H9.jpeg"
import H10 from "../images/people/actor/hollywood/H10.jpeg"
import H11 from "../images/people/actor/hollywood/H11.jpeg"
import H12 from "../images/people/actor/hollywood/H12.jpeg"
import H13 from "../images/people/actor/hollywood/H13.jpeg"
import H14 from "../images/people/actor/hollywood/H14.jpeg"
import H15 from "../images/people/actor/hollywood/H15.jpeg"
import H16 from "../images/people/actor/hollywood/H16.jpeg"
import H17 from "../images/people/actor/hollywood/H17.jpeg"
import H18 from "../images/people/actor/hollywood/H18.jpeg"
import H19 from "../images/people/actor/hollywood/H19.jpeg"
import H20 from "../images/people/actor/hollywood/H20.jpeg"
import H21 from "../images/people/actor/hollywood/H21.jpeg"
import H22 from "../images/people/actor/hollywood/H22.jpeg"
import H23 from "../images/people/actor/hollywood/H23.jpeg"
import H24 from "../images/people/actor/hollywood/H24.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function HollywoodActor() {

    const headerImgs = [
        {
            id:1,
            img:<img src={H1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={H2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={H3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={H4} alt="4" height={190} width={200} />
        },
    ]

    const producerlists = [
        {
            id : 1,
            img:<img src={H1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: "   Tom Hanks   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={H2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Leonardo DiCaprio  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={H3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Robert Downey Jr.  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={H4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Denzel Washington  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={H5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Robert De Niro   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={H6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Tom Cruise  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={H7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Johnny Depp  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={H8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Morgan Freeman   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={H9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Will Smith   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={H10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Brad Pitt   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={H11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Samuel L. Jackson    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={H12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kelvin Hart  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={H13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Al Pacino   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={H14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Dwayne Johnson   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={H15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Anthony Hopkins  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={H16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Matt Damon  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={H17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Daniel Day-Lewis   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={H18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Jason Statham   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={H19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Harrison Ford   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={H20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Chris Hemsworth   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={H21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Bradley Cooper   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={H22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Hugh Jackman   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={H23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Vin Diesel   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={H24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Joaquin Phoenix   ",
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
                    <h5>Vote for favourite <b>Hollywood Male Actor List</b></h5>
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
                        <h4>Top 24 best Hollywood Male Actor </h4>
                        
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

export default HollywoodActor
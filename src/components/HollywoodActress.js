import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import H1 from "../images/people/actress/hollywood/H1.jpeg"
import H2 from "../images/people/actress/hollywood/H2.jpeg"
import H3 from "../images/people/actress/hollywood/H3.jpeg"
import H4 from "../images/people/actress/hollywood/H4.jpeg"
import H5 from "../images/people/actress/hollywood/H5.jpeg"
import H6 from "../images/people/actress/hollywood/H6.jpeg"
import H7 from "../images/people/actress/hollywood/H7.jpeg"
import H8 from "../images/people/actress/hollywood/H8.jpeg"
import H9 from "../images/people/actress/hollywood/H9.jpeg"
import H10 from "../images/people/actress/hollywood/H10.jpeg"
import H11 from "../images/people/actress/hollywood/H11.jpeg"
import H12 from "../images/people/actress/hollywood/H12.jpeg"
import H13 from "../images/people/actress/hollywood/H13.jpeg"
import H14 from "../images/people/actress/hollywood/H14.jpeg"
import H15 from "../images/people/actress/hollywood/H15.jpeg"
import H16 from "../images/people/actress/hollywood/H16.jpeg"
import H17 from "../images/people/actress/hollywood/H17.jpeg"
import H18 from "../images/people/actress/hollywood/H18.jpeg"
import H19 from "../images/people/actress/hollywood/H19.jpeg"
import H20 from "../images/people/actress/hollywood/H20.jpeg"
import H21 from "../images/people/actress/hollywood/H21.jpeg"
import H22 from "../images/people/actress/hollywood/H22.jpeg"
import H23 from "../images/people/actress/hollywood/H23.jpeg"
import H24 from "../images/people/actress/hollywood/H24.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function HollywoodActress() {

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
            name: "   Scarlett Johansson  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={H2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Jeniffer Lawrence  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={H3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Natalie Portman  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={H4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Angelina Jolie  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={H5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Emma Stone   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={H6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Alexandra Daddario  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={H7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Anne Hathaway  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={H8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Megan Fox   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={H9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Jessica Alba   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={H10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Kristen Stewart   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={H11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Zoe Saldana    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={H12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Charlize Theron  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={H13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Emily Blunt   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={H14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Zendaya   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={H15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Mila Kunis  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={H16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Elizabeth Olsen  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={H17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Olivia Wilde   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={H18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Jennifer Aniston   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={H19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Saoirse Ronan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={H20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Shailene Woodley   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={H21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Sandra Bullock   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={H22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Brie Larson   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={H23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Rachel McAdams   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={H24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Blake Lively   ",
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
                    <h5>Vote for favourite <b>Hollywood Actress List</b></h5>
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
                        <h4>Top 24 best Hollywood  Actress </h4>
                        
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

export default HollywoodActress
import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import C1 from "../images/people/actress/chinese/C1.jpeg"
import C2 from "../images/people/actress/chinese/C2.jpeg"
import C3 from "../images/people/actress/chinese/C3.jpeg"
import C4 from "../images/people/actress/chinese/C4.jpg"
import C5 from "../images/people/actress/chinese/C5.jpeg"
import C6 from "../images/people/actress/chinese/C6.jpeg"
import C7 from "../images/people/actress/chinese/C7.jpeg"
import C8 from "../images/people/actress/chinese/C8.jpeg"
import C9 from "../images/people/actress/chinese/C9.jpeg"
import C10 from "../images/people/actress/chinese/C10.jpeg"
import C11 from "../images/people/actress/chinese/C11.jpeg"
import C12 from "../images/people/actress/chinese/C12.jpeg"
import C13 from "../images/people/actress/chinese/C13.jpeg"
import C14 from "../images/people/actress/chinese/C14.jpeg"
import C15 from "../images/people/actress/chinese/C15.jpeg"
import C16 from "../images/people/actress/chinese/C16.jpeg"
import C17 from "../images/people/actress/chinese/C17.jpeg"
import C18 from "../images/people/actress/chinese/C18.jpeg"
import C19 from "../images/people/actress/chinese/C19.jpeg"
import C20 from "../images/people/actress/chinese/C20.jpeg"
import C21 from "../images/people/actress/chinese/C21.jpeg"
import C22 from "../images/people/actress/chinese/C22.jpeg"
import C23 from "../images/people/actress/chinese/C23.jpeg"
import C24 from "../images/people/actress/chinese/C24.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function ChineseActress() {

    const headerImgs = [
        {
            id:1,
            img:<img src={C1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={C2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={C3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={C4} alt="4" height={190} width={200} />
        },
    ]

    const producerlists = [
        {
            id : 1,
            img:<img src={C1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: "   Fan Bingbing  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={C2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: " Dilraba Dilmurat ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={C3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Gong Li  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={C4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Yang Mi  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={C5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Zhao Wei   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={C6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Zhao Liying  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={C7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Yang Zi  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={C8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Maggie Cheung   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={C9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Sun Li  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={C10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Angelababy   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={C11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ju Jingyi   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={C12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Liu Shishi  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={C13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Gulnazar   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={C14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Li Qin  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={C15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Zhang Zifeng  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={C16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Liu Yifei  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={C17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Zhou Xun  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={C18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Joan Chen   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={C19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Tiffany Tang ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={C20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Xiaoqing Liu   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={C21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Tang Wei   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={C22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ning Jing   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={C23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Zhou Dongyu   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={C24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Li Bingbing   ",
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
                    <h5>Vote for favourite <b>Chinese Movies Actresses List</b></h5>
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
                        <h4>Top 24 best Chinese Actresses </h4>
                        
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

export default ChineseActress
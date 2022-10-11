import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import B1 from "../images/people/actress/bollywood/B1.jpeg"
import B2 from "../images/people/actress/bollywood/B2.jpeg"
import B3 from "../images/people/actress/bollywood/B3.jpeg"
import B4 from "../images/people/actress/bollywood/B4.jpg"
import B5 from "../images/people/actress/bollywood/B5.jpeg"
import B6 from "../images/people/actress/bollywood/B6.jpeg"
import B7 from "../images/people/actress/bollywood/B7.jpeg"
import B8 from "../images/people/actress/bollywood/B8.jpeg"
import B9 from "../images/people/actress/bollywood/B9.jpeg"
import B10 from "../images/people/actress/bollywood/B10.jpeg"
import B11 from "../images/people/actress/bollywood/B11.jpeg"
import B12 from "../images/people/actress/bollywood/B12.jpeg"
import B13 from "../images/people/actress/bollywood/B13.jpeg"
import B14 from "../images/people/actress/bollywood/B14.jpeg"
import B15 from "../images/people/actress/bollywood/B15.jpeg"
import B16 from "../images/people/actress/bollywood/B16.jpeg"
import B17 from "../images/people/actress/bollywood/B17.jpeg"
import B18 from "../images/people/actress/bollywood/B18.jpeg"
import B19 from "../images/people/actress/bollywood/B19.jpeg"
import B20 from "../images/people/actress/bollywood/B20.jpeg"
import B21 from "../images/people/actress/bollywood/B21.jpeg"
import B22 from "../images/people/actress/bollywood/B22.jpeg"
import B23 from "../images/people/actress/bollywood/B23.jpeg"
import B24 from "../images/people/actress/bollywood/B24.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function BollywoodActress() {

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
            name: "   Deepika Padukone   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={B2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Priyanka Chopra  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={B3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Alia Bhatt  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={B4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Anushka Sharma  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={B5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Katrina Kaif   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={B6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Kangana Ranaut  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={B7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Kareena Kapoor  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={B8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Shraddha Kapoor   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={B9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Sonam Kapoor   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={B10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Vidya Balan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={B11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Jacqueline Fernandez    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={B12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Aishwarya Rai   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={B13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kriti Sanon   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={B14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Parineeti Chopra   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={B15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Sonakshi Sinha   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={B16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kiara Advani   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={B17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kajol   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={B18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Madhuri Dixit   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={B19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Disha Patani   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={B20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Rani Mukerji   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={B21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Sridevi   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={B22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Rekha   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={B23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Preity Zinta   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={B24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Karisma Kapoor   ",
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
                    <h5>Vote for favourite <b>Bollywood Actress List</b></h5>
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
                        <h4>Top 24 best Bollywood  Actresses </h4>
                        
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

export default BollywoodActress
import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import N1 from "../images/people/actor/nollywood/N1.jpeg"
import N2 from "../images/people/actor/nollywood/N2.jpeg"
import N3 from "../images/people/actor/nollywood/N3.jpeg"
import N4 from "../images/people/actor/nollywood/N4.jpeg"
import N5 from "../images/people/actor/nollywood/N5.jpeg"
import N6 from "../images/people/actor/nollywood/N6.jpeg"
import N7 from "../images/people/actor/nollywood/N7.jpeg"
import N8 from "../images/people/actor/nollywood/N8.jpeg"
import N9 from "../images/people/actor/nollywood/N9.jpeg"
import N10 from "../images/people/actor/nollywood/N10.jpeg"
import N11 from "../images/people/actor/nollywood/N11.jpeg"
import N12 from "../images/people/actor/nollywood/N12.jpeg"
import N13 from "../images/people/actor/nollywood/N13.jpeg"
import N14 from "../images/people/actor/nollywood/N14.jpeg"
import N15 from "../images/people/actor/nollywood/N15.jpeg"
import N16 from "../images/people/actor/nollywood/N16.jpeg"
import N17 from "../images/people/actor/nollywood/N17.jpeg"
import N18 from "../images/people/actor/nollywood/N18.jpeg"
import N19 from "../images/people/actor/nollywood/N19.jpeg"
import N20 from "../images/people/actor/nollywood/N20.jpeg"
import N21 from "../images/people/actor/nollywood/N21.jpeg"
import N22 from "../images/people/actor/nollywood/N22.jpeg"
import N23 from "../images/people/actor/nollywood/N23.jpeg"
import N24 from "../images/people/actor/nollywood/N24.jpeg"
import N25 from "../images/people/actor/nollywood/N25.jpeg"
import N26 from "../images/people/actor/nollywood/N26.jpeg"
import N27 from "../images/people/actor/nollywood/N27.jpeg"
import N28 from "../images/people/actor/nollywood/N28.jpeg"
import N29 from "../images/people/actor/nollywood/N29.jpeg"
import N30 from "../images/people/actor/nollywood/N30.jpeg"
import N31 from "../images/people/actor/nollywood/N31.jpeg"
import N32 from "../images/people/actor/nollywood/N32.jpeg"
import N33 from "../images/people/actor/nollywood/N33.jpeg"
import N34 from "../images/people/actor/nollywood/N34.jpeg"
import N35 from "../images/people/actor/nollywood/N35.jpeg"
import N36 from "../images/people/actor/nollywood/N36.jpeg"
import N37 from "../images/people/actor/nollywood/N37.jpeg"
import N38 from "../images/people/actor/nollywood/N38.jpeg"
import N39 from "../images/people/actor/nollywood/N39.jpeg"
import N40 from "../images/people/actor/nollywood/N40.jpeg"
import N41 from "../images/people/actor/nollywood/N41.jpeg"
import N42 from "../images/people/actor/nollywood/N42.jpeg"
import N43 from "../images/people/actor/nollywood/N43.jpeg"
import N44 from "../images/people/actor/nollywood/N44.jpeg"
import N45 from "../images/people/actor/nollywood/N45.jpeg"
import N46 from "../images/people/actor/nollywood/N46.jpeg"
import N47 from "../images/people/actor/nollywood/N47.jpeg"
import N48 from "../images/people/actor/nollywood/N48.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function NollywoodActor() {

    const headerImgs = [
        {
            id:1,
            img:<img src={N1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={N2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={N3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={N4} alt="4" height={190} width={200} />
        },
    ]

    const producerlists = [
        {
            id : 1,
            img:<img src={N1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: "   Ramsey Nuoah   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={N2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Richard Mofe-Damijo  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={N3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Desmond Elliot  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={N4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Jim lyke  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={N5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Mike Ezuruonye   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={N6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Pete Edochie  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={N7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Nkem Owoh  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={N8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Yul Edochie   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={N9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Alexx Ekubo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={N10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Kanayo O. Kanayo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={N11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Mr. Ibu    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={N12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Nonso Diobi   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={N13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Kenneth Okonwo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={N14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Osita Iheme   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={N15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Chidi Mokeme   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={N16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Chinedu Ikedieze   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={N17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Olu Jacobs   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={N18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Segun Arinze   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={N19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Zubi Michael   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={N20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Odunlade Adekola   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={N21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Bryan Okwara   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={N22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Emeka Ike   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={N23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Sam Dede   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={N24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Frederick Leonard   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 25,
            img:<img src={N25} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Mike Godson   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 26,
            img:<img src={N26} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    OC Ukeje   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 27,
            img:<img src={N27} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Gabriel Afolayan  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 28,
            img:<img src={N28} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Zack Orji   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 29,
            img:<img src={N29} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Van Vicker   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 30,
            img:<img src={N30} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Sola Fosudo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 31,
            img:<img src={N31} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Jide Kene Achufusi   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 32,
            img:<img src={N32} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Chiwetalu Agu   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 33,
            img:<img src={N33} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Bolaji Amusan    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 34,
            img:<img src={N34} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Femi Adebayo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 35,
            img:<img src={N35} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Jide Kosoko   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 36,
            img:<img src={N36} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Adebayo Salami   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 37,
            img:<img src={N37} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ibrahim Chatta   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 38,
            img:<img src={N38} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Lateef Adedimeji   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 39,
            img:<img src={N39} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Saheed Balogun   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 40,
            img:<img src={N40} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Funsho Adeolu   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 41,
            img:<img src={N41} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Yinka Quadri   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 42,
            img:<img src={N42} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Muyiwa Ademola  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 43,
            img:<img src={N43} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Olaniyi Afonja   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 44,
            img:<img src={N44} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Taiwo Hassan   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 45,
            img:<img src={N45} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Wale Akorede   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 46,
            img:<img src={N46} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Dele Odule   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 47,
            img:<img src={N47} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Bolanle Ninalowo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 48,
            img:<img src={N48} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Afeez Abiodun   ",
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
                    <h5>Vote for favourite <b>Nollywood Male Actors List</b></h5>
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
                        <h4>Top 48 best Nollywood  Male Actor </h4>
                        
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

export default NollywoodActor
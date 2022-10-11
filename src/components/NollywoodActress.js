import React, { useState } from "react"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import N1 from "../images/people/actress/nollywood/N1.jpeg"
import N2 from "../images/people/actress/nollywood/N2.jpeg"
import N3 from "../images/people/actress/nollywood/N3.jpeg"
import N4 from "../images/people/actress/nollywood/N4.jpeg"
import N5 from "../images/people/actress/nollywood/N5.jpeg"
import N6 from "../images/people/actress/nollywood/N6.jpeg"
import N7 from "../images/people/actress/nollywood/N7.jpeg"
import N8 from "../images/people/actress/nollywood/N8.jpeg"
import N9 from "../images/people/actress/nollywood/N9.jpeg"
import N10 from "../images/people/actress/nollywood/N10.jpeg"
import N11 from "../images/people/actress/nollywood/N11.jpeg"
import N12 from "../images/people/actress/nollywood/N12.jpeg"
import N13 from "../images/people/actress/nollywood/N13.jpeg"
import N14 from "../images/people/actress/nollywood/N14.jpeg"
import N15 from "../images/people/actress/nollywood/N15.jpeg"
import N16 from "../images/people/actress/nollywood/N16.jpeg"
import N17 from "../images/people/actress/nollywood/N17.jpeg"
import N18 from "../images/people/actress/nollywood/N18.jpeg"
import N19 from "../images/people/actress/nollywood/N19.jpeg"
import N20 from "../images/people/actress/nollywood/N20.jpeg"
import N21 from "../images/people/actress/nollywood/N21.jpeg"
import N22 from "../images/people/actress/nollywood/N22.jpeg"
import N23 from "../images/people/actress/nollywood/N23.jpeg"
import N24 from "../images/people/actress/nollywood/N24.jpeg"
import N25 from "../images/people/actress/nollywood/N25.jpeg"
import N26 from "../images/people/actress/nollywood/N26.jpeg"
import N27 from "../images/people/actress/nollywood/N27.jpeg"
import N28 from "../images/people/actress/nollywood/N28.jpeg"
import N29 from "../images/people/actress/nollywood/N29.jpeg"
import N30 from "../images/people/actress/nollywood/N30.jpeg"
import N31 from "../images/people/actress/nollywood/N31.jpeg"
import N32 from "../images/people/actress/nollywood/N32.jpeg"
import N33 from "../images/people/actress/nollywood/N33.jpeg"
import N34 from "../images/people/actress/nollywood/N34.jpeg"
import N35 from "../images/people/actress/nollywood/N35.jpeg"
import N36 from "../images/people/actress/nollywood/N36.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function NollywoodActress() {

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
            name: "   Genevieve Nnaji   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
        },
        {
            id : 2,
            img:<img src={N2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "  Omotola Jalade  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
        },
        {
            id : 3,
            img:<img src={N3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "  Rita Dominic  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
        },
        {
            id : 4,
            img:<img src={N4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "  Mercy Johnson  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
        },
        {
            id : 5,
            img:<img src={N5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: "   Ini Edo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
        },
        {
            id : 6,
            img:<img src={N6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "  Funke Akindele  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
        },
        {
            id : 7,
            img:<img src={N7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "  Tonto Dike  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
        },
        {
            id : 8,
            img:<img src={N8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: "   Patience Ozokwor   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
        },
        {
            id : 9,
            img:<img src={N9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: "   Stephanie Okereke   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
        },
        {
            id : 10,
            img:<img src={N10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Adesua Etomi   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 11,
            img:<img src={N11} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Chika Ike    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 12,
            img:<img src={N12} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Regina Daniels   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 13,
            img:<img src={N13} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Chioma Akpotha   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 14,
            img:<img src={N14} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Daniella Okeke   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 15,
            img:<img src={N15} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Mercy Aigbe   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 16,
            img:<img src={N16} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Oge Okoye   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 17,
            img:<img src={N17} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Omoni Oboli   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 18,
            img:<img src={N18} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Adunni Ade   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 19,
            img:<img src={N19} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Jumoke Odetola   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 20,
            img:<img src={N20} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ireti Osayemi   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 21,
            img:<img src={N21} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Fausat Balogun  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 22,
            img:<img src={N22} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Peju Ogunmola   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 23,
            img:<img src={N23} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Adebimpe Oyebade   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 24,
            img:<img src={N24} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Iretiola Doyle   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 25,
            img:<img src={N25} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ngozi Ezeonu   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 26,
            img:<img src={N26} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Toyin Abraham   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 27,
            img:<img src={N27} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Nancy Isime  ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 28,
            img:<img src={N28} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Iyabo Ojo   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 29,
            img:<img src={N29} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Fathia Balogun   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 30,
            img:<img src={N30} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Tayo Sobola   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 31,
            img:<img src={N31} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Sola Sobowale   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 32,
            img:<img src={N32} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Ayo Adesanya   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 33,
            img:<img src={N33} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    ROnke Ojo    ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 34,
            img:<img src={N34} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Eniola Badmus   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 35,
            img:<img src={N35} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "    Bunkunmi Oluwasina   ",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
        },
        {
            id : 36,
            img:<img src={N36} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "   Toyin Afolayan   ",
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
                    <h5>Vote for favourite <b>Nollywood Actresses List</b></h5>
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
                        <h4>Top 36 best Nollywood  Actress </h4>
                        
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

export default NollywoodActress
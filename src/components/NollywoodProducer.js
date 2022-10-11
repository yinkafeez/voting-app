import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import P1 from "../images/producer/nollywood/P1.jpeg"
import P2 from "../images/producer/nollywood/P2.jpeg"
import P3 from "../images/producer/nollywood/P3.jpeg"
import P4 from "../images/producer/nollywood/P4.jpeg"
import P5 from "../images/producer/nollywood/P5.jpeg"
import P6 from "../images/producer/nollywood/P6.jpeg"
import P7 from "../images/producer/nollywood/P7.jpeg"
import P8 from "../images/producer/nollywood/P8.jpeg"
import P9 from "../images/producer/nollywood/P9.jpeg"
import P10 from "../images/producer/nollywood/P10.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function NollywoodProducer() {
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
            name: " Mo Abudu ",
            description: "Producer | Your Excellency",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Mo Abudu is the founder of EbonyLife TV and Arguably the leading producer in Nigeria. Her EbonyLife TV organisation has helmed films like :",
            list: "Your Excellency, and there's the upcoming Netflix collaboration with Blood Sisters in the near future"
        },
        {
            id : 2,
            img:<img src={P2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Kemi Adetiba",
            description: "Producer | King of Boys",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "She is a well known producer in Nigeria.Statrting off in the media sphere with music videos. Top films produced by Kemi Adetiba : ",
            list: "The wedding Party, King of Boys and series sequel with Netflix in August."
        },
        {
            id : 3,
            img:<img src={P3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Oge Obasi",
            description: "Producer | Ojuju",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "Oge Obasi is a seasoned television and film producer who's redefining the Nollywood narrative against all odds.  ",
            list: " Her part in the success and prominence the JUJU Stories anthology is one instance, of many."
        },
        {
            id : 4,
            img:<img src={P4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Mildred Okwo",
            description: "Producer | 30 Days",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "The CEO and co-founder of The Audrey Silva Company is a respected producer and director. Her career as a producer has given the Nigerian film industry such gems as. ",
            list: "30 Days, The Meeting and Surulere and then La Femme Anjola, which she co-produced and directed, earlier this year"
        },
        {
            id : 5,
            img:<img src={P5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Kunle Afolayan ",
            description: "Producer | October 1",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Kunle Afolayan is trhe CEO of Golden Effects Pictures, a Nigerian film and production company. he became actively involved in the Nigerian Movie Industry in 2005. SInce then, he has produced many award winning movies including : ",
            list: "The Figurine, Phone Swap, Irapada, October 1 , The CEO Omugwo, ROTI, The Tribunal, Citation, Mokalik and so on"
        },
        {
            id : 6,
            img:<img src={P6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "Jade Osiberu",
            description: "Producer | Ayinla",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "Jade Osiberu's high grossing feature films are an impressive addition to the industry, her web series can't be overlooked, with the likes of . ",
            list: "Rumor Has It, Gidi Up, Isoken Sugar Rush and Ayinla, the latter of which came this year, that help cement her place as one of Nollywood's finest."
        },
        {
            id : 7,
            img:<img src={P7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Emem  Isong",
            description: "Producer | Jezebel",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Emem  Isong started off her career writing and co-producing the 1994 movie Jezebel. She has produced several successful titles since then including : ",
            list: "Games Women Play, Men Do Cry, Breaking Point, BEhind Closed Doors, I Feel You, Endless Lies and so on."
        },
        {
            id : 8,
            img:<img src={P8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " A.Y Makun ",
            description: "Producer | 30 Days in Atlanta",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "The comedian branched into the world of Nigerian film with the massive comedic hit that was 30 Days in Atlanta. His ability to replicate the success of 30 Days in Atlanta in his next backed title - A Trip to Jamaica put a spotlight on his production ability, and he really made the limelight his own with the memory films",
            list: ""
        },
        {
            id : 9,
            img:<img src={P9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " Funke Akindele ",
            description: "Producer | Jenifa's Diary",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "The CEO of SCENE ONE Production  balances various aspects of filmmakings including writing, acting and producing. she wears the hat of a producer pretty well having produced both Yoruba and English titles alike. Top movies produced by Funke Akindele are :",
            list: "Jenifa's Diary(2015),Your Excellency, Industreet and Omo Ghetto : The Saga."
        },
        {
            id : 10,
            img:<img src={P10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  Mary Remmy Njoku  ",
            description: "head | ROK Studios",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "She is the head of ROK Studios as well as an actress and a producer. She has used the platform afforded her by ROK to produce a range of movies that find homes on both the Iroko TV Plartform and the ROK channel on DSTV.",
            list: ""
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
                    <h5>Vote for favourite <b>Nollywood Producer List</b></h5>
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
                        <h4>Top 10 best nollywood producers </h4>
                        <p>
                            Nollywood has been the pillar and source of livelihood for some Nigerians, you 
                            do not need to be told that the Nigerian movie industry is doing well and is 
                            well-rated among the top movie industries in the world.<br />
                            All these achivements are the hard works and consistency coupled with the raw
                            talents of some individuals and we have to give credit to them. Below is the
                            list of the top 10 best movie producers in Nigeria.
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
export default NollywoodProducer
import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import P1 from "../images/producer/hollywood/P1.jpeg"
import P2 from "../images/producer/hollywood/P2.jpg"
import P3 from "../images/producer/hollywood/P3.jpeg"
import P4 from "../images/producer/hollywood/P4.jpeg"
import P5 from "../images/producer/hollywood/P5.jpeg"
import P6 from "../images/producer/hollywood/P6.jpeg"
import P7 from "../images/producer/hollywood/P7.jpeg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function HollywoodProducer() {
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
            name: " Michael Mann ",
            description: "Producer | The last of the Mohicans",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "Michael Mann is an American filmmaker known for directing,producing,and writing various works of film and television. Top films produced by Michael Mann : ",
            list: "The last of the Mohicans, Heat, The Insider, Miami Vice, Collateral, Blackhat,The Elevator,The Kingdom and many more. "
        },
        {
            id : 2,
            img:<img src={P2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Steven Spielberg",
            description: "Producer | The Last Gun",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "Steven Spielberg is an American director, producer. and screenwriter. He is considered one of the founding pioneers of the NEW HOLLYWOOD ERA, as well as one of the most popular directors and producers in film history. Top films produced by Steven Spielberg  : ",
            list: "The Last Gun, Fighter squad, Escape to Nowhere, Slipstreem, Amblin, Bridge of Spies Ready Player One, West Side Story, THe Fablemans and many more."
        },
        {
            id : 3,
            img:<img src={P3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: "Irwin Winkler",
            description: "Producer | The Right Stuff(1983)",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "Irwin Winkler is to thank for the production of Rocky and Goodfellas. He has created over 55 Hollywood productions. Top films produced by Irwin Winkler : ",
            list: " The Right Stuff(1983), Home of Brave, Double Trouble, Busting, The Net, Survivor, Creed, Silence, THe Irishman "
        },
        {
            id : 4,
            img:<img src={P4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Kathleen Kennedy",
            description: "Producer | E.T. the Extra-Terrestrial",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: " Kathleen Kennedy is currently the president of LUCASFILM . Her first film as a producer was E.T. THE EXTRA-TERRESTRIAL. She has participated in the making of over 60 films that have earned over $11 billion worldwide. Here are top films produced by her : ",
            list: "E.T. the Extra-Terrestrial, War of the Worlds, Hereafter, Lincoln, Star Wars, The Mandalorian The Book of Boba Fettt Light & Magic, and many more"
        },
        {
            id : 5,
            img:<img src={P5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " Nina Jacobson ",
            description: "Producer | Crazy Rich Asians",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Nina Jacobson is an American film executive. She was the president of the Buena Vista Motion Pictures Group, a subsidiary of The Walt Disney Company until 2006. Top movies produced by Nina Jacobson : ",
            list: "Crazy Rich Asians, Ben is Back, The Hunger Games: Catching Fire, The Last Man, Pose, American Crime Story,  "
        },
        {
            id : 6,
            img:<img src={P6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "Kevin Feige",
            description: "Producer | Hulk",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "Kevin Feige is an American film and television producer who has been the president of Marvrel Studios and the primary producer of the Marvel Cinematics Universe franchise since 2007. Top movies produced by Kevin Feige:  ",
            list: "Hulk, The Publisher, Spider-Man 2, X-Men:The Last Stand, Thor: The Dark World, Captain America:The Winter Soldier and many more "
        },
        {
            id : 7,
            img:<img src={P7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Frank Marshall",
            description: "Producer | The Bee Gees:How Can You Mend a Broken Heart",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Frank Wilton Marshall is an American film producer and director. He often works alongside his wife, Kathleen Kennedy. With Kennedy and Steven Spielberg, he was one of the founders of Amblin Entertainment. In 1991 he founded The Kennedy/Marshall Company, a film production company that has a contract with DreamWorks.",
            list: " Top movies produced by Frank Wilton Marshall: The Bee Gees:How Can You Mend a Broken Heart, Eight Below,Congo, Arachnophobia, Empire of the Sun, Assassin's Creed, Diana and many more"
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
   

    return (
        <>
            <NavbarPage />
            <div className="producer-list-container">
                <div className="producer-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/producer-list">Producer List</Link> </p>
                    <h5>Vote for favourite <b>Hollywood Producer List</b></h5>
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
                        <h4>Top 7 best hollywood producers </h4>
                        <p>
                            You do not need to be told that the Hollywood industry is doing well and is 
                            well-rated among the top movie industries in the world.<br />
                            All these achivements are the hard works and consistency coupled with the raw
                            talents of some individuals and we have to give credit to them. Below is the
                            list of the top 10 best Hollywood movie producers.
                        </p>
                        <div className="listDiv">
                            <Row className="listRow">
                                {data.map(obj => {
                                    return(
                                        <Col xs={12} lg={6} className="listCol" style={{justifyContent:"center"}}>
                                            <div className="list-description-Div">
                                            <Row>
                                                <Col xs={6} className="list-img-Col"><div className="list-img">{obj.img}</div></Col>
                                                <Col xs={6} className="list-description-Col"  key={obj.id}>
                                                   
                                                        <div className="list-name">  {obj.name}</div><br /> 
                                                        <div className="list-firstDescription"> {obj.description} </div> 
                                                        <div id={obj.id}>
                                                            <p className="voteCount" id={obj.id}> {obj.voteCount} </p>
                                                            <div className="votingImg"  id={obj.id} onClick={voteBtnOnclick}> {obj.voteImg} </div> 
                                                        </div>
                                                    
                                                </Col>
                                            </Row>
                                            </div>
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
export default HollywoodProducer
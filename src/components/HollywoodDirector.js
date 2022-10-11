import React, { useState } from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import D1 from "../images/director/hollywood/D1.jpg"
import D2 from "../images/director/hollywood/D2.jpg"
import D3 from "../images/director/hollywood/D3.jpg"
import D4 from "../images/director/hollywood/D4.jpg"
import D5 from "../images/director/hollywood/D5.jpg"
import D6 from "../images/director/hollywood/D6.jpg"
import D7 from "../images/director/hollywood/D7.jpg"
import D8 from "../images/director/hollywood/D8.jpg"
import D9 from "../images/director/hollywood/D9.jpg"
import D10 from "../images/director/hollywood/D10.jpg"
import vote from "../images/producer/vote.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function HollywoodDirector() {
    const headerImgs = [
        {
            id:1,
            img:<img src={D1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={D2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={D3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={D4} alt="4" height={190} width={200} />
        },
    ]
    const producerlists = [
        {
            id : 1,
            img:<img src={D1} alt ="1" height={190} width={150} />,
            number: "1.",
            name: " Steven Spielberg",
            description: "Director | Bridge of Spies ",
            voteCount: 0,
            voteImg:<img src={vote} alt="11" height={40} width={55}  />,
            secondDescription: "American filmmaker, Steven Allan Spielberg started in New Hollywood and is the most financially successful filmmaker. ",
            list: "Some of his blockbuster movies include: War of the Worlds, Minority Report, Tintin, Ready Player One, Amistad, War Horse, The Post,  and many more"
        },
        {
            id : 2,
            img:<img src={D2} alt ="2" height={190} width={150} />,
            number: "2.",
            name: "Alfred Hitchcock",
            description: "Director | Shadow of a Doubt",
            voteCount: 0,
            voteImg:<img src={vote} alt="13" height={40} width={55} />,
            secondDescription: "An English filmmaker, Sir Alfred Joseph Hitchcock KBE has directed almost 50 films in six decades, many of which are being viewed and studied today.",
            list: "Some of his blockbuster movies include: Notorious, Vertigo, Psycho, Rear Window, The birds and many more"
        },
        {
            id : 3,
            img:<img src={D3} alt ="3" height={190} width={150} />,
            number: "3.",
            name: " Martin Scorsese",
            description: "Director | Brokeback Mountain",
            voteCount: 0,
            voteImg:<img src={vote} alt="15" height={40} width={55} />,
            secondDescription: "He is an American film director, an Academy Award, three Primetime Emmys, a Grammy, four BAFTAs, three Golden Globes, and two Directors Guild of America Awards AFI Life Achievement Award 1997, Kennedy Center Honor 2007 and BAFTA Fellowship 2012 were among Scorsese's many distinctions.",
            list: "Top movies directed by Martin Scorsese are : Boardwalk Empire, Public Speaking, Pretend It's a City, Casino  and so on"
        },
        {
            id : 4,
            img:<img src={D4} alt ="4" height={190} width={150} />,
            number: "4.",
            name: "Christopher Nolan",
            description: "Director | Tenet ",
            voteCount: 0,
            voteImg:<img src={vote} alt="17" height={40} width={55} />,
            secondDescription: "Christopher Nolan is a British-American filmmaker. His films have made over $5 billion globally, and he has 11 Oscar nominations.",
            list: "Top movies directed by Martin Scorsese are : The Prestige, Dunkirk, Inception, Interstellar  and many more "
        },
        {
            id : 5,
            img:<img src={D5} alt ="5" height={190} width={150} />,
            number: "5.",
            name: " James Cameron ",
            description: "Director | Titanic ",
            voteCount: 0,
            voteImg:<img src={vote} alt="19" height={40} width={55} />,
            secondDescription: "Canadian filmmaker James Francis Cameron CC has worked across a wide range of genres. He is most renowned for directing science fiction and epic films.",
            list: "Some of his blockbuster movies include: Terminator 1 & 2, Avatar, Judgement Day and so on "
        },
        {
            id : 6,
            img:<img src={D6} alt ="6" height={190} width={150} />,
            number: "6.",
            name: "James Francis Coppola",
            description: "Director | Freda",
            voteCount: 0,
            voteImg:<img src={vote} alt="21" height={40} width={55} />,
            secondDescription: "James Francis Cameron is a Canadian filmmaker who has worked in various genres. He is most renowned for directing science fiction and epic films. ",
            list: "Some of his blockbuster movies include: The Bling Ring, Twixt, Tetro, The Good Shepherd and many more."
        },
        {
            id : 7,
            img:<img src={D7} alt ="7" height={190} width={150} />,
            number: "7.",
            name: "Quentin Jerome Tarantino",
            description: "Director | Pulp Fiction",
            voteCount: 0,
            voteImg:<img src={vote} alt="23" height={40} width={55} />,
            secondDescription: "Quentin Jerome Tarantino is an American director, actor, film critic, and author who is best known for his work in the film Pulp Fiction.",
            list: "Some of his blockbuster movies include: Reservoir Dogs, Pulp Fiction, Jackie Brown. "
        },
        {
            id : 8,
            img:<img src={D8} alt ="8" height={190} width={150} />,
            number: "8.",
            name: " Guy Ritchie ",
            description: "Director | Aladdin",
            voteCount: 0,
            voteImg:<img src={vote} alt="25" height={40} width={55} />,
            secondDescription: "Guy Stuart Ritchie is an English filmmaker who works in various capacities within the film industry. British mobster flicks and the Sherlock Holmes movies with Robert Downey Jr. ",
            list: "Top movies directed by Guy Ritchie include: King Arthur: Legend of the Sword, The Gentlemen, Wrath of Man."
        },
        {
            id : 9,
            img:<img src={D9} alt ="9" height={190} width={150} />,
            number: "9.",
            name: " David Fincher ",
            description: "Director | House of Cards",
            voteCount: 0,
            voteImg:<img src={vote} alt="27" height={40} width={55} />,
            secondDescription: "He is an American film director, David Fincher Oscar nominations for his films, often psychological thrillers and biographical dramas, including three for Best Director.",
            list: "Top movies directed by David Fincher include : Gone Girl, Dragon Tattoo, Zodiac, The Social Network and many more"
        },
        {
            id : 10,
            img:<img src={D10} alt ="10" height={190} width={150} />,
            number: "10.",
            name: "  George Lucas  ",
            description: "Director | Wolf Warrior 1 & 2",
            voteCount: 0,
            voteImg:<img src={vote} alt="29" height={40} width={55} />,
            secondDescription: "An American entrepreneur, filmmaker, and producer, G. Walton Jr. is best known for creating of most popular movies. He was chairman before Lucasfilm was sold to Disney in 2012.",
            list: "Some of his blockbuster movies include: Star Wars, Return of the Jedi, and many more"
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
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/director-list">Director List</Link> </p>
                    <h5>Vote for favourite <b>Hollywood Director List</b></h5>
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
                        <h4>Top 10 best  Hollywood Director </h4>
                        <p>
                            Hollywood directors are honored and referred to as the best directors on the 
                            planet through their super hit motion pictures that are constanly positioned
                            on number 1 in the chartbuster rundown. These talented individuals with an eye
                            for detail spent their days and nights working on set and making various 
                            masterpies. Their motion pictures have made them famous everywhere throughout the
                            world.
                            Here is the list of ten best Hollywood directors.
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
export default HollywoodDirector
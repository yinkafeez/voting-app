import React from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import B1 from "../images/movie/bollywood/B1.jpg"
import B2 from "../images/movie/bollywood/B2.jpg"
import B3 from "../images/movie/bollywood/B3.jpg"
import B4 from "../images/movie/bollywood/B4.jpg"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

function Bollywood() {
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

    return (
        <>
            <NavbarPage />
            <div className="movie-list-container">
                <div className="movie-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/movie-list">Movie List</Link> </p>
                    <h5>Vote for favourite <b>Bollywood Movie List</b></h5>
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
                <div className="movie-list">
                        <h4>Here is the list of top 100 bollywood Movies List All</h4>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Bollywood
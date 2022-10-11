import React from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import K1 from "../images/movie/korea/K1.jpg"
import K2 from "../images/movie/korea/K2.jpg"
import K3 from "../images/movie/korea/K3.jpg"
import K4 from "../images/movie/korea/K4.jpg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {RiArrowDropDownLine} from "react-icons/ri"
import Footer from "./Footer"

function Korea() {
    const headerImgs = [
        {
            id:1,
            img:<img src={K1} alt="1" height={190} width={200} />
        },
        {
            id:2,
            img:<img src={K2} alt="2" height={190} width={200} />
        },
        {
            id:3,
            img:<img src={K3} alt="3" height={190} width={200} />
        },
        {
            id:4,
            img:<img src={K4} alt="4" height={190} width={200} />
        },
    ]

    return (
        <>
            <NavbarPage />
            <div className="movie-list-container">
                <div className="movie-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/movie-list">Movie List</Link> </p>
                    <h5>Vote for favourite <b>Korea Movie List</b></h5>
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
                        <h4>Here is the list of top 100 korea Movies List All</h4>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Korea
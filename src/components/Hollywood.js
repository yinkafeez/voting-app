import React from "react"
import axios from "axios"
import NavbarPage from "./NavbarPage"
import { Link } from "react-router-dom"
import H1 from "../images/movie/hollywood/H1.jpg"
import H2 from "../images/movie/hollywood/H2.jpg"
import H3 from "../images/movie/hollywood/H3.jpg"
import H4 from "../images/movie/hollywood/H4.jpg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {RiArrowDropDownLine} from "react-icons/ri"

function Hollywood() {
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

    return (
        <>
            <NavbarPage />
            <div className="movie-list-container">
                <div className="movie-list-header">
                    <p><Link to="/vote2watch">Home</Link> /  <Link to="/category/movie-list">Movie List</Link> </p>
                    <h5>Vote for favourite <b>Hollywood Movie List</b></h5>
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
                        <h4>Here is the list of top 100 hollywood Movies List All</h4>
                </div>
            </div>
        </>
    )
}

export default Hollywood
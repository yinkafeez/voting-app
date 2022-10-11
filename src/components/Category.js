import React from "react"
import {Link} from "react-router-dom"
import NavbarPage from "./NavbarPage"
import movie from "../images/movie.png"
import producer from "../images/producer.jpg"
import people from "../images/people.jpg"
import director from "../images/director.jpg"
import { BiMovie } from "react-icons/bi"
import { FaProductHunt } from "react-icons/fa"
import { GoFileDirectory } from "react-icons/go"
import { BsPeopleFill } from "react-icons/bs"
import Footer from "./Footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FaAngleDoubleRight} from "react-icons/fa"

function Category() {
     //   categories variable
     const Categories = [
        {
            id:1,
            path:"/category/movie-list",
            img: <img src={movie}  height={180} width={360} alt="1" />,
            more:"More",
            icon:<FaAngleDoubleRight />,
            title:"Movies"
        },
        {
            id:2,
            path:"/category/producer-list",
            img: <img src={producer} height={180} width={360} alt="2" />,
            more:"More",
            icon:<FaAngleDoubleRight />,
            title:"Producers"
        },
        {
            id:3,
            path:"/category/director-list",
            img: <img src={director} height={180} width={360} alt="3" />,
            more:"More",
            icon:<FaAngleDoubleRight />,
            title:"Directors"
        },
        {
            id:4,
            path:"/category/people-list",
            img: <img src={people} height={180} width={290} alt="4" />,
            more:"More",
            icon:<FaAngleDoubleRight />,
            title:"Actors and Actresses"
        },
    ]

    return (
        <>
            <NavbarPage />
            <div className="categoryBackground">
                <div className="topBackground">
                    <h1 className="list-title2">Category</h1>
                </div>
                    <div className="category">
                    <Row className="categoryRow">
                        {Categories.map(list => {
                            return(
                                <Col xs={12} md={6} >
                                <Link to={list.path}>
                                    <div key={list.id} className="categoryDiv"> 
                                        <div className="categoryImg"> {list.img} </div>
                                        <div className="categoryTitle"> {list.title} </div>
                                        <span className="categoryMoreIcon">{ list.more } { list.icon } </span>
                                    </div>
                                </Link>
                                </Col>
                            )
                        })}
                    </Row>
                    </div>
            </div>
            <Footer />
        </>
    )

}

export default Category
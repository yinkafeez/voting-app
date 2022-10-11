import React from "react"
import {Link} from "react-router-dom"
import NavbarPage from "./NavbarPage"
import B from "../images/producer/B.jpeg"
import N from "../images/producer/N.jpeg"
import H from "../images/producer/H.jpeg"
import C from "../images/producer/C.jpeg"
import K from "../images/producer/K.jpeg"
import Footer from "./Footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FaAngleDoubleRight} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown'

function ProducerList() {

    const MovieList = [
        {
            id:1,
            img:<img src ={B} height={180} width={405} alt="1" />,
            title:"Best Bollywood Producers",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/producer-list/bollywood"
        },
        {
            id:2,
            img:<img src ={N}  height={180} width={405} alt="2" />,
            title:"Best Nollywood Producers",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/producer-list/nollywood"
        },
        {
            id:3,
            img:<img src ={H} height={180} width={405} alt="3" />,
            title:"Best Hollywood Producers",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/producer-list/hollywood"
        },
        {
            id:4,
            img:<img src ={C} height={180} width={405} alt="4" />,
            title:"Best Chinese Movie Producers",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/producer-list/chinese"
        },
        {
            id:5,
            img:<img src ={K} height={180} width={405} alt="5" />,
            title:"Best Korea Movie Producers",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/producer-list/korea"
        },
        
    ]

    
    return (
        <>
            <NavbarPage />
            <div className="movieCategoryBackground">
                <div className="topBackground2">
                    <h1 className="list-title">Category : Producer</h1>
                    <div className="all-category-link">
                        <Dropdown>
                            <Dropdown.Toggle clasName="dropdownButton"  >
                                All Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/category/movie-list"> Movies  </Dropdown.Item> 
                                <Dropdown.Item href="/category/producer-list"> Producers </Dropdown.Item>
                                <Dropdown.Item href="/category/director-list"> Directors </Dropdown.Item> 
                                <Dropdown.Item href="/category/people-list"> Actors and Actresses </Dropdown.Item>  
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                    <div className="producerCategory">
                    <Row className="producerCategoryRow">
                        {MovieList.map(list => {
                            return(
                                <Col xs={12} md={6} lg={4}>
                                <Link to={list.path}>
                                    <div key={list.id} className="producerCategoryDiv"> 
                                        <div className="producerCategoryImg"> {list.img} </div>
                                        <div className="producerCategoryTitle"> {list.title} </div>
                                        <span className="producerCategoryMoreIcon">{ list.more } { list.icon } </span>
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

export default ProducerList 
import React from "react"
import {Link} from "react-router-dom"
import NavbarPage from "./NavbarPage"
import B from "../images/director/B.jpeg"
import N from "../images/director/N.jpeg"
import H from "../images/director/H.jpeg"
import C from "../images/director/C.jpeg"
import K from "../images/director/K.jpeg"
import Footer from "./Footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FaAngleDoubleRight} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown'

function DirectorList() {

    const MovieList = [
        {
            id:1,
            img:<img src ={B} height={180} width={405} alt="1" />,
            title:"Best Bollywood Directors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/director-list/bollywood"
        },
        {
            id:2,
            img:<img src ={N}  height={180} width={405} alt="2" />,
            title:"Best Nollywood Directors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/director-list/nollywood"
        },
        {
            id:3,
            img:<img src ={H} height={180} width={405} alt="3" />,
            title:"Best Hollywood Directors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/director-list/hollywood"
        },
        {
            id:4,
            img:<img src ={C} height={180} width={405} alt="4" />,
            title:"Best Chinese Movie Directors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/director-list/chinese"
        },
        {
            id:5,
            img:<img src ={K} height={180} width={405} alt="5" />,
            title:"Best Korea Movie Directors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/director-list/korea"
        },
    ]

    return (
        <>
            <NavbarPage />
            <div className="movieCategoryBackground">
                <div className="topBackground2">
                    <h1 className="list-title">Category : Director</h1>
                    <div className="all-category-link">
                        <Dropdown>
                            <Dropdown.Toggle clasName="toggle-button"  >
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
                    <div className="directorCategory">
                    <Row className="directorCategoryRow">
                        {MovieList.map(list => {
                            return(
                                <Col xs={12} md={6} lg={4}>
                                <Link to={list.path}>
                                    <div key={list.id} className="directorCategoryDiv"> 
                                        <div className="directorCategoryImg"> {list.img} </div>
                                        <div className="directorCategoryTitle"> {list.title} </div>
                                        <span className="directorCategoryMoreIcon">{ list.more } { list.icon } </span>
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

export default DirectorList 
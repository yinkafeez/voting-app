import React from "react"
import {Link} from "react-router-dom"
import NavbarPage from "./NavbarPage"
import B1 from "../images/people/B1.jpeg"
import B2 from "../images/people/B2.jpeg"
import N1 from "../images/people/N1.jpeg"
import N2 from "../images/people/N2.jpeg"
import H1 from "../images/people/H1.jpeg"
import H2 from "../images/people/H2.jpeg"
import C1 from "../images/people/C1.jpeg"
import C2 from "../images/people/C2.jpeg"
import K1 from "../images/people/K1.jpeg"
import K2 from "../images/people/K2.jpeg"
import Footer from "./Footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FaAngleDoubleRight} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown'

function PeopleList() {

    const peopleList = [
        {
            id:1,
            img:<img src ={B2} height={180} width={405} alt="1" />,
            title:"Best Bollywood Actors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/bollywood-actor"
        },
        {
            id:2,
            img:<img src ={B1} height={180} width={405} alt="2" />,
            title:"Best Bollywood Actress",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/bollywood-actress"
        },
        {
            id:3,
            img:<img src ={N2}  height={180} width={405} alt="3" />,
            title:"Best Nollywood Actors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/nollywood-actor"
        },
        {
            id:4,
            img:<img src ={N1} height={180} width={405} alt="4" />,
            title:"Best Nollywood Actress",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/nollywood-actress"
        },
        {
            id:5,
            img:<img src ={H2} height={180} width={405} alt="5" />,
            title:"Best Hollywood Actors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/hollywood-actor"
        },
        {
            id:6,
            img:<img src ={H1} height={180} width={405} alt="5" />,
            title:"Best Hollywood Actress",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/hollywood-actress"
        },
        {
            id:7,
            img:<img src ={C2} height={180} width={405} alt="5" />,
            title:"Best Chinese Movie Actors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/chinese-actor"
        },
        {
            id:8,
            img:<img src ={C1} height={180} width={405} alt="5" />,
            title:"Best Chinese Movie Actress",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/chinese-actress"
        },
        {
            id:9,
            img:<img src ={K2} height={180} width={405} alt="5" />,
            title:"Best Korea Movie Actors",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/korea-actor"
        },
        {
            id:10,
            img:<img src ={K1} height={180} width={405} alt="5" />,
            title:"Best Korea Movie Actress",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/people-list/korea-actress"
        },
    ]

    return (
        <>
            <NavbarPage />
            <div className="movieCategoryBackground">
                <div className="topBackground2">
                    <h1 className="list-title">Category : People</h1>
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
                    <div className="peopleCategory">
                    <Row className="peopleCategoryRow">
                        {peopleList.map(list => {
                            return(
                                <Col xs={12} md={6} lg={4}>
                                <Link to={list.path}>
                                    <div key={list.id} className="peopleCategoryDiv"> 
                                        <div className="peopleCategoryImg"> {list.img} </div>
                                        <div className="peopleCategoryTitle"> {list.title} </div>
                                        <span className="peopleCategoryMoreIcon">{ list.more } { list.icon } </span>
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

export default PeopleList 
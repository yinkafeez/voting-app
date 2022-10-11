import React,{useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import NavbarPage from "./NavbarPage"
import B from "../images/movie/B.jpeg"
import N from "../images/movie/N.jpeg"
import H from "../images/movie/H.jpeg"
import C from "../images/movie/C.jpeg"
import K from "../images/movie/K.jpeg"
import Footer from "./Footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FaAngleDoubleRight} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown'

function MovieList() {

    const api = axios.create({
        baseURL: "https://www.omdbapi.com/?s=nollywood&apikey=ee083e82" 
     });
     useEffect(() =>{
        api.get()
         .then((response) => {
             console.log(response.data);
         })
         .catch((err) => {
             console.log(err.message);
          });
     },[])
 
    //  movie categories function
    const MovieList = [
        {
            id:1,
            img:<img src ={B} height={180}  alt="1" />,
            title:"Bollywood Movies List",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/movie-list/bollywood"
        },
        {
            id:2,
            img:<img src ={N} height={180}  alt="2" />,
            title:"Nollywood Movies List",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/movie-list/nollywood"
        },
        {
            id:3,
            img:<img src ={H}  height={180}  alt="3" />,
            title:"Hollywood Movie List",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/movie-list/hollywood"
        },
        {
            id:4,
            img:<img src ={C} height={180}  alt="4" />,
            title:"Chinese Cinema List",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/movie-list/chinese"
        },
        {
            id:5,
            img:<img src ={K} height={180}  alt="5" />,
            title:"Cinema in South Korea",
            more:"More",
            icon:<FaAngleDoubleRight />,
            path:"/category/movie-list/korea"
        },
    ]

    return (
        <>
            <NavbarPage />
            <div className="movieCategoryBackground">
                <div className="topBackground2">
                    <h1 className="list-title">Category : Movies</h1>
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
                    <div className="movieCategory">
                    <Row className="movieCategory2">
                        {MovieList.map(list => {
                            return(
                                <Col xs={12} md={6} lg={4}>
                                <Link to={list.path}>
                                    <div key={list.id} className="MovieListDiv"> 
                                        <div className="movieCategoryImg"> {list.img} </div>
                                        <div className="movieCategoryTitle"> {list.title} </div>
                                        <div className="movieCategoryMoreIcon">{ list.more } { list.icon } </div>
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

export default MovieList
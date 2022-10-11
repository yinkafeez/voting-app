import React from "react"
import {Link} from "react-router-dom"
import { FiTrendingUp } from "react-icons/fi"
import B1 from "../images/movie/bollywood/B1.jpg"
import B2 from "../images/movie/bollywood/B2.jpg"
import B3 from "../images/movie/bollywood/B3.jpg"
import N1 from "../images/people/actress/nollywood/N1.jpeg"
import N2 from "../images/people/actress/nollywood/N2.jpeg"
import N3 from "../images/people/actress/nollywood/N3.jpeg"
import C1 from "../images/people/actor/chinese/C1.jpeg"
import C2 from "../images/people/actor/chinese/C2.jpeg"
import C3 from "../images/people/actor/chinese/C3.jpeg"
import D1 from "../images/director/korea/D1.jpg"
import D2 from "../images/director/korea/D2.jpg"
import D3 from "../images/director/korea/D3.jpeg"
import P1 from "../images/producer/hollywood/P1.jpeg"
import P2 from "../images/producer/hollywood/P2.jpg"
import P3 from "../images/producer/hollywood/P3.jpeg"
import NavbarPage from "./NavbarPage"
import Carousel from "react-bootstrap/Carousel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Slider from "./Slider"
import HomePageCategory from "./HomePageCategory"
import Footer from "./Footer"


function HomePage() {


    return(
        <div>
            <NavbarPage />
            {/* Description Div */}
            <div className=" description">
                <Container fluid>
                <Row>
                    <Col xs={12} md={6} className="TopDescription">
                        <h5>WELCOME</h5>
                        <h3>
                            Collection of fan-powered <br /> rankings on just about <br />everything concerning movies
                        </h3>
                        <p className="mt-4">
                            Browse through collections of best movies,<br />
                            Ranked best to worst by fans and followers.
                        </p>
                        <p>Register an account and start voting for your favourite .</p>
                        <Link to="/sign-in">
                            <button>LOGIN</button>
                        </Link>
                        <Link to="/sign-up">
                            <button>REGISTER</button>
                        </Link>
                    </Col>
                    <Col xs={0} md={6}>
                        <div className="carouselDiv">
                            <Carousel className="carouselMovieListBody">
                                 {/* SlideShow Carousel */}
                                 {/* Item 1 */}
                                <Carousel.Item className="carouselMovieListItem">
                                    <div className="carouselItemCaption">
                                        <h5>Vote for the best Bollywood Movies</h5>
                                        <p>Trending <FiTrendingUp className="ms-2"/> </p>
                                    </div>
                                    <div className="carouselItemImg">
                                        <img src={B1} alt="1" height={140} width={140} />
                                        <img src={B2} alt="1" height={140} width={140} />
                                        <img src={B3} alt="1" height={140} width={140} />
                                    </div>
                                </Carousel.Item>
                                  {/* Item 1 */}
                                <Carousel.Item className="carouselMovieListItem">
                                    <div className="carouselItemCaption">
                                        <h5>Vote for the best Nollywood Actress</h5>
                                        <p>Trending <FiTrendingUp className="ms-2"/></p>
                                    </div>
                                    <div className="carouselItemImg">
                                        <img src={N1} alt="1" height={140} width={140} />
                                        <img src={N2} alt="1" height={140} width={140} />
                                        <img src={N3} alt="1" height={140} width={140} />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="carouselMovieListItem">
                                    <div className="carouselItemCaption">
                                        <h5>Vote for the best Chinese Actor</h5>
                                        <p>Trending <FiTrendingUp className="ms-2"/></p>
                                    </div>
                                    <div className="carouselItemImg">
                                        <img src={C1} alt="1" height={140} width={140} />
                                        <img src={C2} alt="1" height={140} width={140} />
                                        <img src={C3} alt="1" height={140} width={140} />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="carouselMovieListItem">
                                    <div className="carouselItemCaption">
                                        <h5>Vote for the best Korea Director</h5>
                                        <p>Trending <FiTrendingUp className="ms-2"/></p>
                                    </div>
                                    <div className="carouselItemImg">
                                        <img src={D1} alt="1" height={140} width={140} />
                                        <img src={D2} alt="1" height={140} width={140} />
                                        <img src={D3} alt="1" height={140} width={140} />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="carouselMovieListItem">
                                    <div className="carouselItemCaption">
                                        <h5>Vote for the best Hollywood Producer</h5>
                                        <p>Trending <FiTrendingUp className="ms-2"/></p>
                                    </div>
                                    <div className="carouselItemImg">
                                        <img src={P1} alt="1" height={140} width={140} />
                                        <img src={P2} alt="1" height={140} width={140} />
                                        <img src={P3} alt="1" height={140} width={140} />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
            {/* Category */}
            <HomePageCategory />

            {/* Feature 1 */}
            <Container fluid className="FirstFeatureContainer">
                <div className="FirstFeatureHeaderDiv">
                    <h3>Top Five Movie Industries</h3>
                </div>
                <div>
                    <Slider />
                </div>
            </Container>

            <Footer />
             
        </div>
    )
}

export default HomePage
import React from "react"
import {Link} from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/COl"
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs"

function Footer() {
    return(
        <>
            <div className="footerContainer">
                <div className="footerAppDescription">
                    <h5>
                        vote2watch is the best place to discover the best in movie selection. 
                        The best movies to watch across various genres and languages.
                        vote2watch provides the best fan-powered rankings on just about anything and everything concerning Movies.
                    </h5>
                </div>
                <hr class="bg-white" />
                <div className="FooterLineDiv">
                    <Row>
                        <Col className="footerLine"><hr /></Col>
                        <Col className="footerWebName">vote<b className="text-primary">2</b>watch</Col>
                        <Col className="footerLine2"><hr /></Col>
                    </Row>
                </div>
                <div>
                        <Row className="FooterWebInfoRow">
                            <Col className="FooterWebInfoCol"><Link to="/privacy-policy">Privacy Policy</Link></Col>
                            <Col className="FooterWebInfoCol"><Link to="/contact-page">Contact Us</Link></Col>
                            <Col className="FooterWebInfoCol"><Link to="/company-info">About</Link></Col>
                        </Row>
                </div>
                <div className="socialMediaLink">
                    <a href="https://www.facebook.com/olagunju.afeez.927">
                         <span className="fbLink">
                            <FaFacebookF class="text-primary" style={{width: "15px",height: "25px"}}/>
                        </span>
                    </a>
                    <a href="https://wa.me//+2348132906416">
                        <BsWhatsapp className="text-success ms-5" style={{width: "30px",height: "38px"}}/>
                    </a>
                </div>
                <div className="FooterCopyright">
                    <p>Copyright © vote2watch  All Rights Reserved 2022.</p>
                    <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. 
                        Unauthorized use is prohibited and punishable by law.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
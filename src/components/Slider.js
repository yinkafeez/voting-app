import React from "react";
import Bollywood from "../images/Bollywood.png"
import Nollywood from "../images/Nollywood.jpg"
import Hollywood from "../images/Hollywood.jpg"
import Chinese from "../images/Chinese.jpeg"
import Korea from "../images/Korea.jpg"
import {FaAngleDoubleRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Slider() {

  // FEATURE 1
 const FirstFeatures = [
  {
      id:1,
      img:<img src ={Bollywood} height={250} width={200} alt="1" />,
      title:"Bollywood Movie List",
      more:"More",
      icon:<FaAngleDoubleRight />,
      path:"/category/movie-list/bollywood"
  },
  {
      id:2,
      img:<img src ={Nollywood} height={250} width={200} alt="2" />,
      title:"Nollywood Movie List",
      more:"More",
      icon:<FaAngleDoubleRight />,
      path:"/category/movie-list/nollywood"
  },
  {
      id:3,
      img:<img src ={Hollywood} height={250} width={200} alt="3" />,
      title:"Hollywood Movie List",
      more:"More",
      icon:<FaAngleDoubleRight />,
      path:"/category/movie-list/hollywood"
  },
  {
      id:4,
      img:<img src ={Chinese} height={250} width={200} alt="3" />,
      title:"Chinese Movie List",
      more:"More",
      icon:<FaAngleDoubleRight />,
      path:"/category/movie-list/chinese"
  },
  {
      id:5,
      img:<img src ={Korea} height={250} width={200} alt="6" />,
      title:"Korea Movie List",
      more:"More",
      icon:<FaAngleDoubleRight />,
      path:"/category/movie-list/korea"
  }
]

  return(
    <div className="cards-container">
        {FirstFeatures.map(firstFeature => {
            return(
                <Link to={firstFeature.path}>
                
                <div className="card" key={firstFeature.id}>
                <Row>
                    <Col>
                    {firstFeature.img}
                    </Col>
                    <Col>
                    <span className="card-content">
                        <h1>{firstFeature.title }</h1>
                        <p>{ firstFeature.more } { firstFeature.icon }</p>
                    </span>
                    </Col>
                </Row>
                </div>
                
                </Link>
            )
        })}
    </div>
  )
}
 
  
export default Slider
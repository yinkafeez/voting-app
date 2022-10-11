import React,{useState,useEffect} from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { AiFillHome } from "react-icons/ai"
import { RiRegisteredFill } from "react-icons/ri"
import { BiLogIn } from "react-icons/bi"
import { FcAbout } from "react-icons/fc"
import {Link} from "react-router-dom"


function NavbarPage() {

    const[toggleMenu,setToggleMenu] = useState("")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // handle toggle fuunction on button click
    function handleToggle() {
        setToggleMenu(!toggleMenu)
    }

    // function that will resize the nav on every size
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

      

    return (
        <nav className="fixed-top">
            <ul className="webNameList">
                <l1 className="webNameItems">
                    vote<b className="text-primary">2</b>watch
                </l1>
            </ul>
            {(toggleMenu || screenWidth > 768) && (
                <ul className="list">
                    <li className="items"><Link to="/vote2watch">Home <b><AiFillHome style={{color:"rgb(34, 34, 238)", marginLeft:"4.8rem"}}/></b> </Link></li>
                    <li className="items"><Link to="/sign-up">Register <b><RiRegisteredFill style={{color:"rgb(34, 34, 238)", marginLeft:"4rem"}}/> </b> </Link></li>
                    <li className="items"><Link to="/sign-in">Login <b><BiLogIn style={{color:"rgb(34, 34, 238)", marginLeft:"5.1rem"}}/> </b> </Link></li>
                    <li className="items"><Link to="/company-info">About <b><FcAbout style={{color:"rgb(34, 34, 238)", marginLeft:"5.1rem"}}/> </b> </Link></li>
                </ul>
            )}
            
            <button onClick={handleToggle} className="btn">
                {toggleMenu ? (
				    <MdClose style={{ color: "#000", width: "30px", height: "30px",  }} />
				  ) : (
				    <FiMenu style={{ color: "#000", width: "30px", height: "30px",  }} />
				)}
            </button>
        </nav>
    )
}

export default NavbarPage
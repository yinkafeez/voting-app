import React,{useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {Modal, Button} from "react-bootstrap"
import { BiMovie } from "react-icons/bi"
import { FaProductHunt } from "react-icons/fa"
import { GoFileDirectory } from "react-icons/go"
import { BsPeopleFill } from "react-icons/bs"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

function HomePageCategory() {

    // category variable
    const Categories = [
        {
            id:1,
            path:"/category/movie-list",
            icon: <BiMovie style={{width: "60px",height: "75px"}} />,
            title:"Movies"
        },
        {
            id:2,
            path:"/category/producer-list",
            icon: <FaProductHunt style={{width: "60px",height: "75px"}} />,
            title:"Producers"
        },
        {
            id:3,
            path:"/category/director-list",
            icon: <GoFileDirectory style={{width: "60px",height: "75px"}} />,
            title:"Directors"
        },
        {
            id:4,
            path:"/category/people-list",
            icon: <BsPeopleFill style={{width: "60px",height: "75px"}} />,
            title:"Actors and Actresses"
        },
    ]
    // storing useNavigate as a variable
    const navigate = useNavigate()

    // modal login state
    const[name,setName] = useState("")
    const[password,setPassword] = useState("")
    
     // modal state
     const [isOpen,setIsOpen] = useState(false)

     // open modal function
     function openModal()  {
         setIsOpen(true)
     }
 
     // close modal function
     function closeModal()  {
         setIsOpen(false)
     }
 
     // modal footer onclick button function
     function homepageLoginBtnOnclick() {
         closeModal()
     }
     //function to  navigate to category if login inputs are true
     function homepagelModalLoginBtnOnclick() {
        closeModal()
        navigate("/vote2watch")
        
     }

      // name onchange function 
    function nameOnchange(e) {
        setName(e.target.value)
    }

    // password onchange function 
    function passwordOnchange(e) {
        setPassword(e.target.value)
    }

     // getting stored username input from the local storage when the website unMount(reload)
	function getInitialUsername() {
		// getting stored items
		const temp = localStorage.getItem("name")
		const savedUsername = JSON.parse(temp)
		return savedUsername || ""
	} 

    // getting stored password input from the local storage when the website unMount(reload)
	function getInitialPassword() {
		// getting stored items
		const temp = localStorage.getItem("password")
		const savedPassword = JSON.parse(temp)
		return savedPassword || ""
	} 

    // storing get input as a variable
    const SignUpName = getInitialUsername()
    const SignUpPassword = getInitialPassword()

    //  home page category login form OnSubmit Function
    function handleSubmit(e) {
        // prevent page reload
        e.preventDefault()

        // check if all fields are filled
        if (name=="" || password=="") {
            alert("Please fill all fields")
        }
        else if (SignUpName !== name || SignUpPassword !== password) {
            alert("Invalid Username or Password")
            setName("")
            setPassword("")
        }
        else{
            homepagelModalLoginBtnOnclick()
            setName("")
            setPassword("")
        }
    }
     //Home page category button onClick function
     function categoryOnClickBtnFunction(event) {
        {Categories.map(Category => {
            if(event.currentTarget.id ==1) {
                openModal()
                console.log(Category.id)
            }
            else if(event.currentTarget.id ==2) {
                openModal()
            }
            else if(event.currentTarget.id ==3) {
                openModal()
            }
            else if(event.currentTarget.id ==4) {
                openModal()
            }
        })}  
     } 


     return(
        <>
            {/* Cattegory Div */}
            <div className="homeCategoryDiv">
                <Container className="homeCategoryContainer">
                <Row>
                {Categories.map(category => {
                    const id = category.id
                    return(
                        <Col xs={6} lg={3} className="subCategoryCol">
                            <button  onClick={categoryOnClickBtnFunction}>
                                <div className="subCategoryDiv" key={id}>
                                    <div className="homeCategoryIcons"> {category.icon} </div>
                                    <div className="homeCategoryTitle"> {category.title} </div>
                                </div> 
                            </button>
                        </Col>
                    ) 
                })}
                </Row>
                </Container>
            </div>

            {/* Modal */}
            <Modal show={isOpen} onHide={closeModal} className="categoryModal">
                    <Modal.Header>
                        <h4>Log In</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="categoryModalFormDiv">
                            <form  className="categoryModalForm" onSubmit={handleSubmit}>
                                <label>Username</label><br />
                                <input
                                type="text"
                                value={name}
                                onChange={nameOnchange}
                                placeholder="Enter your username"
                                /> <br /> <br />

                                <label>Password</label><br />
                                <input
                                type="password"
                                value={password}
                                onChange={passwordOnchange}
                                placeholder="Enter your passcode"
                                /><br />
                                <button type="submit" className="categoryModalFormBtn">
                                    Log In
                                </button>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="categoryModalFooter">
                        <p>Didn't have an account? Go back to homepage and sign up</p>
                        <Button onClick={homepageLoginBtnOnclick}>
                            Back
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>

     )

}

export default HomePageCategory 
import React,{useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import {Modal, Button} from "react-bootstrap"

function LoginPage() {
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
    function footerBtnOnclick() {
        closeModal()
        navigate("/category")
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
		return savedUsername || []
	} 

    // getting stored password input from the local storage when the website unMount(reload)
	function getInitialPassword() {
		// getting stored items
		const temp = localStorage.getItem("password")
		const savedPassword = JSON.parse(temp)
		return savedPassword || []
	} 

    // storing get input as a variable
    const SignUpName = getInitialUsername()
    const SignUpPassword = getInitialPassword()

     // storing useNavigate as a variable
     const navigate = useNavigate()

    // onsubmit function 
    function handleSubmit(e) {
        //prevent page reload
        e.preventDefault() 

        // check if all fields are filled
        if (name=="" || password=="") {
            alert("Please fill all fields")
        }
        else if (SignUpName !== name || SignUpPassword!==password) {
            alert("Invalid Username or Password")
            setName("")
            setPassword("")
        }
        else{
            openModal()
        }

    }


    return (
        <div>
            <div className="webName">
            vote<b className="text-primary">2</b>watch
            </div>
            <div className="signinDiv">
                <h5>Sign In</h5>
                
                <form  className="signinForm" onSubmit={handleSubmit}>
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
                <button type="submit" >
                    Sign In
                </button>
                </form>
                <p>New on our platform? <Link to="/sign-up">Create an account</Link></p>
            </div>

            {/* Modal */}
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Body className="bg-success modalBody">
                <div className="modalWebName">
                    vote<b className="text-primary">2</b>watch
                </div>
                    <h5>WELCOME TO OUR WEBSITE.</h5> 
                </Modal.Body>
                <Modal.Footer className="bg-success modalFooter">
                    <Button onClick={footerBtnOnclick}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}

export default LoginPage
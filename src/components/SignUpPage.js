import React,{useState,useEffect} from "react";
import {useNavigate,Link} from "react-router-dom"

function SignUpPage() {
    const[name,setName] = useState([])
    const[password,setPassword] = useState([])
    const[email,setEmail] = useState([])
    const[phoneNumber,setPhoneNumber] = useState([])
    const[professions,setProfessions] = useState(
        [
            {
                id:1,
                title:"Architect"
            },
            {
                id:2,
                title:"Engineer"
            },
            {
                id:3,
                title:"Electrician"
            },
            {
                id:4,
                title:"Accountant"
            },
            {
                id:5,
                title:"Physician"
            },
            {
                id:6,
                title:"Dentist"
            },
            {
                id:7,
                title:"Teacher"
            },
            {
                id:8,
                title:"Scientist"
            },
            {
                id:9,
                title:"Businessperson"
            },
            {
                id:10,
                title:"Designer"
            },
            {
                id:11,
                title:"Lawyer"
            },
            {
                id:12,
                title:"Chef"
            },
            {
                id:13,
                title:"Artist"
            },
            {
                id:14,
                title:"Firefighter"
            },
            {
                id:15,
                title:"Actor"
            },
            {
                id:16,
                title:"Butcher"
            },
            {
                id:17,
                title:"Painter"
            },
            {
                id:18,
                title:"Mechanic"
            },
            {
                id:19,
                title:"Secretary"
            },
            {
                id:20,
                title:"Gardener"
            },
            {
                id:21,
                title:"Journalist"
            },
            {
                id:22,
                title:"Farmer"
            },
            {
                id:23,
                title:"Nurse"
            },
            {
                id:24,
                title:"Soldier"
            },
            {
                id:25,
                title:"Liberian"
            },
            {
                id:26,
                title:"Pharmacist"
            },
            {
                id:27,
                title:"Veterinarian"
            },
            {
                id:28,
                title:"Plumber"
            },
            {
                id:29,
                title:"Baker"
            },
            {
                id:30,
                title:"Hairdresser"
            },
            {
                id:31,
                title:"Driver"
            },
            {
                id:32,
                title:"Photographer"
            },
            {
                id:33,
                title:"Tailor"
            },
            {
                id:34,
                title:"Fisherman"
            },
            {
                id:35,
                title:"Salesperson"
            },
        ]
    )

    // username onchange function 
    function nameOnchange(e) {
        setName(e.target.value)
    }

     // email onchange function 
     function emailOnchange(e) {
        setEmail(e.target.value)
    }

     // phone number onchange function 
     function phoneNumberOnchange(e) {
        setPhoneNumber(e.target.value)
    }

     // password onchange function 
     function passwordOnchange(e) {
        setPassword(e.target.value)
    }
    // profession onchange function 
    function professionOnchange(e) {
        setProfessions({
           title: e.target.value
        })
    }

    //storing of name input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(name)
        localStorage.setItem("name", temp)
    },[name])

     //storing of email input in the local storage 
     useEffect(() =>{
        const temp = JSON.stringify(email)
        localStorage.setItem("email", temp)
    },[email])

     //storing of password input in the local storage 
     useEffect(() =>{
        const temp = JSON.stringify(password)
        localStorage.setItem("password", temp)
    },[password])


    // storing useNavigate as a variable
    const navigate = useNavigate()

    // onSubmit function
    function handleSubmit(e) {
        // prevent reload
        e.preventDefault()

        // check if all fields are filled
        if(name=="" || email=="" || phoneNumber=="" || password==""){
            alert("Please fill all fields")
        }
        else if(phoneNumber.length < 8){
            alert("phone number must be at least 8 characters ")
        }
        else{
            navigate("/sign-in")
        }
    }

    return (
        <div>
            <div className="webName">
                vote<b className="text-primary">2</b>watch
            </div>
            <div className="signUpDiv">
                <h5>Sign up</h5>
                <p className="headerPar">Create New vote<b className="text-primary">2</b>watch Account</p>
                <form className="signupForm" onSubmit={handleSubmit}>
                    <label style={{marginLeft:"-13.3rem"}}>Username</label><br />
                    <input 
                        type="text"
                        value={name}
                        onChange={nameOnchange}
                        placeholder="Enter your username"
                    /><br /><br />

                    <label style={{marginLeft:"-15.5rem"}}>Email</label><br />
                    <input 
                        type="email"
                        value={email}
                        onChange={emailOnchange}
                        placeholder="Enter your email address"
                    /><br /><br />

                    <label style={{marginLeft:"-11rem"}}>Phone Number</label><br />
                    <input 
                        type="number"
                        value={phoneNumber}
                        onChange={phoneNumberOnchange}
                        placeholder="Enter your phone number"
                    /><br /><br />
                    <label style={{marginLeft:"-13.5rem"}}>Password</label><br />
                    <input 
                        type="password"
                        value={password}
                        onChange={passwordOnchange}
                        placeholder="Enter your passcode"
                    /><br /><br />

                    <label style={{marginLeft:"-13.3rem"}}>Profession</label><br />
                    <select>
                        <option>Choose your profession...</option>
                        <hr />
                        {professions.map(profession => {
                            return (
                                <option key={profession.id}>
                                    {profession.title}
                                </option>
                            )
                        })}
                    </select><br />

                    <button type="submit">Sign up</button>
                </form>
                <p className="bottomPar">Already have an account? <Link to="/sign-in">Sign in</Link></p>
            </div>
        </div>
    )
}

export default SignUpPage
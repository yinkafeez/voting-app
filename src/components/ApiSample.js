import React,{useState,useEffect} from "react";
import axios from "axios";


function ApiSample() {
    const[posts,setPosts] = useState([])
    const[title,setTitle] = useState("")
    const[body,setBody] = useState("")

    //title onChange
    function titleOnchange(e) {
        setTitle(e.target.value)
    }
    // body onchange
    function bodyOnchange(e) {
        setBody(e.target.value)
    }

    // Get Data with axios
    //storing link has a variable
    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts" 
     });
     //get data
    useEffect(() =>{
       api.get("?_limit=2")
        .then((response) => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.log(err.message);
         });
    },[])

    // post data with axios
   function addPost(title,body){
    api
    .post('', {
        title:title,
        body:body,
    })
    .then((response) => {
        setPosts((posts) => [response.data , ...posts]);
    })
    .catch((err) => {
        console.log(err.message);
    });
   }

   // Delete data
   function deletePost(id) {
        api.delete("${id}");
        setPosts(
            posts.filter((post) => {
                return post.id !== id
            })
        );
   }

    //onSubmit function 
    function handleSubmit(e) {
        e.preventDefault();
        addPost(title,body)
        setTitle("")
        setBody("")
    }

    return(
        <>
            <form className="mt-5" onSubmit={handleSubmit}>
                <>
                    <input 
                        type="text" 
                        style={{width:"100%"}}
                        value={title}
                        onChange={titleOnchange}
                    /> 
                    <textarea 
                        // name=""
                        // id=""
                        value={body}
                        onChange={bodyOnchange}
                        style={{width:"100%",height:"15rem"}}
                    />
                    <button type="submit" className="p-2 px-5 ps-5 bg-primary">
                        Add Post
                    </button>
                </>
            </form>
            {posts.map(post =>{
                return(
                    <div>
                        <h2 className="text-center">{post.title}</h2>
                        <h5 className="text-center">{post.body}</h5>
                        <button onClick={() => deletePost(post.id)} style={{marginnLeft:"5rem"}}>
                            Delete
                        </button>
                    </div>
                )
            })}
        </>
    )
} 

export default ApiSample


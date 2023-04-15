// import React, { useContext } from 'react'
// import {Link,useNavigate} from 'react-router-dom'
// import  {useState}  from 'react';
// import Axios from 'axios';
// import { AuthContext } from '../Context/authContext';

// export default function Login() {
 
//     const [username ,setUsername] = useState("");
//     const [password , setPassword] =useState("");



//     const {loginContext} =useContext(AuthContext);

//     const [err, setError] = useState(null);
//     const navigate = useNavigate();
//     const login =async(e)=>{
//       e.preventDefault();
//       loginContext({username,password}).then((response)=>{
//         if(response.data.message){
//           setError(response.data.message)
//         }
//         else{
//           navigate("/")
//         }  
//       }
//     )}
  
    

//   return ( 
//     <div >
//       <h1>Login</h1>
//          <form >
//         <input type="text" placeholder='username' name ="username" onChange={(e)=>{setUsername(e.target.value)}}/>
//         <input type="password" placeholder='password' name = "password" onChange={(e)=>{setPassword(e.target.value)}}/>
//         <button onClick={login}>Login</button>
//         <br />
//         {err && <p>{err}</p>}
//         <span>Don't You have an account<Link to ="/register">Register</Link></span>
       
//         </form>
      
//     </div>
//   )
// }

import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
 axios.defaults.withCredentials=true;

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
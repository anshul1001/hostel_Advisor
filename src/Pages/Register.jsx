// import React from 'react'
// import {Link, useNavigate} from 'react-router-dom';
// import {useState}  from 'react';

// import Axios from 'axios';

// export default function Register() {
//   const [username ,setUsername] =useState("");
//   const [password,setPassword] = useState("");
//   const [email,setEmail] = useState("");
//   const [err,setErr]=useState(null);
//   const navigate = useNavigate();

//   const register=async(e)=>{
//     e.preventDefault();
//     try{
//    await Axios.post("http://localhost:3001/server/auth/register",{
//     username : username,
//     password: password,
//     email:email
//   })
//   navigate("/login");
// }
// catch(err){
//   setErr(err.response.data);
// }
// };
  
//   return (
//     <div className="auth">
//     <h1>Register</h1>
//     <form>
//       <input  type="text" placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
//       <input  type="email" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
//       <input  type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
//       <button onClick={register}>Register</button>
//       {err && <p>{err}</p>}
//       <br />
//       <span>Do you have an account<Link to ="/login">Login</Link></span>
//       </form>
    
//   </div>
//   )
// }


import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/server/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
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
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

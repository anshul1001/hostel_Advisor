
import React from "react";
import Axios from "axios";
import { useState } from "react";
import './Home.css';

import himg from "./homeimg.jpeg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {

  const [PropertyList, setPropertyList] = useState([]);
  const [loc ,setLoc] = useState("");

  const getPropertyList = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.get("http://localhost:3001/server/posts");
      setPropertyList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    setLoc(event.target.value);
    console.log(loc)
  };
  
  return (
  <>
      <div>
      <div className="search">

        <div className="searchBar">

            <center><h1>find pg rooms nearby</h1></center>

            <form className="d-flex" role="search" onSubmit={getPropertyList}>

                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={loc} onChange={handleInputChange} />

                <datalist id="localities">
                  <option value="vallabh nagar"></option>
                  <option value="malwa mill"></option>
                  <option value="vijay nagar"></option>
                </datalist>

                <button className="btn" type="submit" >
                  <Link className="list-group-item" to="/Search">
                    Search
                    </Link>
                </button>
            </form>                

        </div>
      </div>
     
    
      
      <Footer/>

      
      </div>
      
     

     
    </>
  );
}

import React, { useDebugValue } from 'react'
import './Single.css'
import userImage from "./userI.png"
import  { useState, useEffect } from "react";
import Axios from "axios"
function Single() {
const [PropertyList, setPropertyList] = useState([]);
useEffect(() => {
 

 async function getPropertyList (){
    try {
      const res = await Axios.get("http://localhost:3001/server/posts");
      setPropertyList(res.data);
      console.log("hello")
    } catch (err) {
      console.log(err);
    }
  };
  getPropertyList(); 
}, []);


  return (
    <>
    {PropertyList.length > 0 &&
              PropertyList.map((properties) => {
               if (true)
                      
                 return (
                  <div>
                    <div className="property-details">
      <div className="owner-details">
        <img src={userImage} alt="User" />
        <div className="owner-info">
          <h2>Property Owner</h2>
          <p>Name: {properties.ownername}</p>
          <p>Email: {properties.gmail}</p>
          <p>Contact Number : {properties.phonenumber}</p>
        </div>
      </div>
      <hr />
      <div className="property-info">
        <h2>Property Details</h2>
        <p>Address: {properties.address}</p>
        <p>City: Indore</p>
        <p>State: Madhya Pradesh</p>

        <p>Propert Rent : ₹{ properties.rent}</p>
      </div>
    </div>
                  </div>

                 )})}



       
    </>
    
  )
}

export default Single;

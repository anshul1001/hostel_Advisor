import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
 


export default function Post() {
    const [gmail, setGmail] = useState("");
    const [propertyName, setPropertyName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    // const [images, setImages] = useState();
    const [rent, setRent] = useState(0);
    const [locality, setLocality] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [ ownerName, setOwnerName] = useState("");
    const [date ,setDate] = useState();


    const register = ()=>{
      Axios.post('http://localhost:3001/create',{
        gmail:gmail,
        propertyName:propertyName,
        address:address,
        phoneNumber:phoneNumber,
        rent:rent,
        locality:locality,
        propertyType:propertyType,
        ownerName:ownerName,
        date:date
      }).then(()=>{
        alert("You have successfully registered");
      });
    };
    return (
      <div className="App-1">
        < div className="information">
          <label>Gmail:</label>
          <input
            type="text"
            onChange={(event) => {
              setGmail(event.target.value);
            }}
          />
          <label>Property Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setPropertyName(event.target.value);
            }}
          />
          <label>Owner Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setOwnerName(event.target.value);
            }}
          />
          <label>Locality:</label>
          <input
            type="text"
            onChange={(event) => {
              setLocality(event.target.value);
            }}
          />
          <label>Address:</label>
          <input
            type="text"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
           {/* <label>Upload Images:</label>
          <input
            type="file"
            onChange={(event) => {
              setImages(event.target.value);
            }}
          /> */}
           <label>Rent:</label>
          <input
            type="number"
            onChange={(event) => {
              setRent(event.target.value);
            }}
          />
           <label>Property Type:</label>
          <input
            type="text"
            onChange={(event) => {
              setPropertyType(event.target.value);
            }}
          />
           <label>Phone Number:</label>
          <input
            type="number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
          <label>Date of registration:</label>
          <input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
       <button type="submit" onClick={register}>Register</button>
      </div>    
      </div>
    );
  }
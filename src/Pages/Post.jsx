// import React from 'react'
// import { useState } from 'react';
// import Axios from 'axios';
 


// export default function Post() {
//     const [gmail, setGmail] = useState("");
//     const [propertyName, setPropertyName] = useState("");
//     const [address, setAddress] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     // const [images, setImages] = useState();
//     const [rent, setRent] = useState(0);
//     const [locality, setLocality] = useState("");
//     const [propertyType, setPropertyType] = useState("");
//     const [ ownerName, setOwnerName] = useState("");
//     const [date ,setDate] = useState();
//     const [image,setImage] = useState("");


//     const register = ()=>{
//       Axios.post('http://localhost:3001/server/posts',{
//         gmail:gmail,
//         propertyName:propertyName,
//         address:address,
//         phoneNumber:phoneNumber,
//         rent:rent,
//         locality:locality,
//         propertyType:propertyType,
//         ownerName:ownerName,
//         date:date,
//         image:image
//       }).then(()=>{
//         alert("You have successfully registered");
//       });
//     };
//     return (
//       <div className="App-1">
//         < div className="information">
//           <label>Gmail:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setGmail(event.target.value);
//             }}
//           />
//           <label>Property Name:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setPropertyName(event.target.value);
//             }}
//           />
//           <label>Owner Name:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setOwnerName(event.target.value);
//             }}
//           />
//           <label>Locality:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setLocality(event.target.value);
//             }}
//           />
//           <label>Address:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setAddress(event.target.value);
//             }}
//           />
//            <label>Upload Images:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setImage(event.target.value);
//             }}
//           />
//            <label>Rent:</label>
//           <input
//             type="number"
//             onChange={(event) => {
//               setRent(event.target.value);
//             }}
//           />
//            <label>Property Type:</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setPropertyType(event.target.value);
//             }}
//           />
//            <label>Phone Number:</label>
//           <input
//             type="number"
//             onChange={(event) => {
//               setPhoneNumber(event.target.value);
//             }}
//           />
//           <label>Date of registration:</label>
//           <input
//             type="date"
//             onChange={(event) => {
//               setDate(event.target.value);
//             }}
//           />
//        <button type="submit" onClick={register}>Register</button>
//       </div>    
//       </div>
//     );
//   }



import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import './Post.css';

export default function Post() {
    
    const [gmail, setGmail] = useState("");
    const [propertyName, setPropertyName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [rent, setRent] = useState(0);
    const [locality, setLocality] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [ ownerName, setOwnerName] = useState("");
    const [date ,setDate] = useState();
    const [image,setImage] = useState("");

    const register = ()=>{
      Axios.post('http://localhost:3001/server/posts',{
        gmail:gmail,
        propertyName:propertyName,
        address:address,
        phoneNumber:phoneNumber,
        rent:rent,
        locality:locality,
        propertyType:propertyType,
        ownerName:ownerName,
        date:date,
        image:image
      }).then(()=>{
        alert("You have successfully registered");
      });
    };

    return (

      <div className="post" >

        <h1>SECTION 1 : Personal Details</h1>

        <div className="personalDetails">

              <label>Gmail</label>
              <input
                type="text"
                onChange={(event) => {
                  setGmail(event.target.value);
                }}
              />

            <label>Phone Number</label>
            <input
              type="number"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />

            <label>Owner Name</label>
            <input
              type="text"
              onChange={(event) => {
                setOwnerName(event.target.value);
              }}
            />

        </div>

        <h1>SECTION 2 : Property Details</h1>

        <div className="propertyDetails">

          <div className="col1">

            <label>Property Name</label>
            <input
              type="text"
              onChange={(event) => {
                setPropertyName(event.target.value);
              }}
            />

            <label>Locality</label>
            <input
              type="text"
              onChange={(event) => {
                setLocality(event.target.value);
              }}
            />

            <label>Address</label>
            <input
              type="text"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>

          <div className="col2">

            <label>Rent</label>
            <input
              type="number"
              onChange={(event) => {
                setRent(event.target.value);
              }}
            />

            <label>Property Type</label>
            <input
              type="text"
              onChange={(event) => {
                setPropertyType(event.target.value);
              }}
            />

            <label>Upload Image</label>
            <input
              className='inputImage'
              type="file"
              accept="image/png,image/gif,image/jpeg"
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />

          </div>
        </div>

          <div className="date">

            <label>Date of registration</label>
            <input
              type="date"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            /> 
          </div>

          <div className="register">

            <button className='btn btn-dark' type="submit" onClick={register}>Register</button>
          </div>

      <div/>

      {/* <div className="App-1">
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
          <label>Upload Images:</label>
          <input
            type="text"
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
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
      </div>    */}

      </div>
    );
  }
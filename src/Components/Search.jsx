import React from 'react'
import PropTypes from 'prop-types';
import Axios from 'axios';
import {useState} from 'react';
export default function Search(){
    const [PropertyList, setPropertyList]  = useState([]);
    const getPropertyList = ()=>{
        Axios.get("http://localhost:3001/properties").then((response)=>{
        setPropertyList(response.data)
        console.log(response.data[0].gmail)
        });
    }
    return (
        <>
               <h1>Welcome to our Site!</h1>
               <h3><i>Search here ! To find your dream room</i></h3>
        <div>
            <form className="d-flex w-50 position-absolute start-50 translate-middle my-5" role="search">
                
                <input className="form-control me-2" type="search" placeholder="Search your locality" aria-label="Search" list="localities"/>
                <datalist id ="localities">
                    <option value="vallabh nagar"></option>
                    <option value="malwa mill"></option>
                    <option value="vijay nagar"></option>
                </datalist>
             
                
                <button className="btn btn-outline-success" type="submit" >Search</button>
               

            </form>
            </div>
            <button onClick={getPropertyList} >hello</button>
            {
                PropertyList.map(properties=>{
                    return(
                        <h1><div>{properties.ownername}</div></h1>
                    )
                })
            }
                
          


            
               
          
            
        </>
    );
} 

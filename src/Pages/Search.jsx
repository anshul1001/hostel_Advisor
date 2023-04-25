import React from "react";
import './searchPage.css'
import { Link } from "react-router-dom";
// import logo from '../../images/img1.jpg'
import Axios from "axios";
import { useState } from "react";
import himg from "./homeimg.jpeg";



const Search = () => {
    const MyStyle ={
        transform: 'translate3d(-2643px, 0px, 0px); transition: all 0.9s ease 0s' ,
        width: '7050px'
    }

    const MyStyle2={
        width:"440.6px"
    }

    const [PropertyList, setPropertyList] = useState([]);
    const [loc ,setLoc] = useState("");
    let count=0;
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

        <div className="main-container">
            <div className="property-filter-container">
                <div className="mobile-container">
                    <div class="filters-container">
                        <div class="">
                            <h2>Filters</h2>
                        </div>

                        <div class="filter-block">
                            <h3>Gender</h3>
                            <label class="checkbox-holder "> Gents
                                <input type="checkbox" rel-val="1" class="filteroptiongender" />
                                <span class="checkmark">
                                </span>
                            </label>
                            <label class="checkbox-holder "> Ladies
                                <input type="checkbox" rel-val="2" class="filteroptiongender" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder "> Unisex
                                <input type="checkbox" rel-val="3" class="filteroptiongender" />
                                <span class="checkmark"></span>
                            </label>
                        </div>

                        <div class="filter-block">
                            <h3>Monthly rent</h3>
                            <label class="checkbox-holder"> &lt; 5000
                                <input type="checkbox" rel-val="5000" class="filteroptionmonthlyrent" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder"> 5,000 - 7,500
                                <input type="checkbox" rel-val="5000-7500" class="filteroptionmonthlyrent" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder"> 7,500 - 10,000
                                <input type="checkbox" rel-val="7500-10000" class="filteroptionmonthlyrent" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder"> &gt; 10,000
                                <input type="checkbox" rel-val="10000" class="filteroptionmonthlyrent" />
                                <span class="checkmark"></span>
                            </label>
                        </div>

                        <div class="filter-block">
                            <h3>Occupancy</h3>
                            <label class="checkbox-holder"> Single Sharing
                                <input type="checkbox" rel-val="1" class="filteroptionroomtypename" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder"> Two Sharing
                                <input type="checkbox" rel-val="2" class="filteroptionroomtypename" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder"> Three Sharing
                                <input type="checkbox" rel-val="3" class="filteroptionroomtypename" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-holder"> Four Sharing
                                <input type="checkbox" rel-val="4" class="filteroptionroomtypename" />
                                <span class="checkmark"></span>
                            </label>

                        </div>

                    </div>
                </div>
            </div>
            <div className="property-listing-container">

                <div class="searched-city-details-div row">
                <form className="d-flex" role="search" onSubmit={getPropertyList}>

                <input className="form-control me-2" type="search" placeholder="Enter the desired Locality" aria-label="Search" value={loc} onChange={handleInputChange} />

                <datalist id="localities">
                <option value="vallabh nagar"></option>
                <option value="malwa mill"></option>
                <option value="vijay nagar"></option>
                </datalist>

                <button className="btn" type="submit" >
                
                    Search
                    
                </button>
                </form> 
                    <div class="col-12 border-bottom">
                    <h3> {PropertyList.map((properties)=>{
                        if(properties.locality===loc || loc ===""){
                            count=count+1;
                        }
                    })}  {count} Result Found</h3>
                    </div>
                </div>

                <div class="row">              
            {PropertyList.length > 0 &&
              PropertyList.map((properties) => {
               if (properties.locality===loc || loc ==="")
                      
                 return (
                        <div class="col-md-6  col-12">
                        <div class="property-box">
                            <div class="property-img-slider owl-carousel owl-loaded owl-drag"></div>
                            <div class="property-card-details">
                                <div class="property-name-gender-div">
                                    <h3>{properties.propertyname} &amp; ACCOMODATION</h3>
                                </div>
                                 <p class="pg-address match-height" >{ properties.address}</p>
                                <div class="room-price-div"><h5> ₹{properties.rent} </h5><span>/month onwards</span></div>
                            </div>
                            <div class="property-more-shown">
                                <div rel-val="591" class="btn-style-04 otp_session" type="button" >
                                    <Link  className="list-group-item" to="/Single">
                                    View PG Details
                                    </Link>
                                    </div>
                            </div>
                            
                        </div>
                        </div>
                 )
                      
                })
            }

                        
                        
        
               
           
                </div>
                 
            </div>
    </div>
             
       
    )
}

export default Search;
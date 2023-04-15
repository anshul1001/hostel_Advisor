import React from "react";
// import PropTypes from 'prop-types';
import Axios from "axios";
import { useState } from "react";
export default function Home() {
  const [PropertyList, setPropertyList] = useState([]);
  const [loc ,setLoc] = useState("");

  const getPropertyList = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.get("http://localhost:3001/server/posts");
      setPropertyList(res.data);
      
      
    //   setPropertyList(PropertyList.filter((properties)=>properties.locality === {loc}))

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
      <h1>Welcome to our Site!</h1>
      <h3>
        <i>Search here ! To find your dream room</i>
      </h3>
      <div>
        <form onSubmit={getPropertyList}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search your locality"
          aria-label="Search"
          list="localities"
          value={loc} onChange={handleInputChange}/>
        
        <datalist id="localities">
          <option value="vallabh nagar"></option>
          <option value="malwa mill"></option>
          <option value="vijay nagar"></option>
        </datalist>
        <button  type ="submit" className="btn btn-outline-success"  >
          Search {loc}
        </button >
        </form>
        
           
              { PropertyList.length >0 && PropertyList.map((properties) => {
                if(properties.locality === loc)
                      return (
                        <h1 key={properties.id}>
                          <div>
                            {properties.id}
                            {properties.ownername}
                          </div>
                        </h1>
                      );
                      return null;
                

            }
          
                    
                  )}
                
            
        
       
      </div>
    </>
  );
}

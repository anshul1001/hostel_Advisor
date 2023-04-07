import React from 'react'
import PropTypes from 'prop-types';

export default function Search(){

    return (

        <>
        
            <form className="d-flex w-50 position-absolute start-50 translate-middle my-5" role="search">
                
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </>
    );
} 

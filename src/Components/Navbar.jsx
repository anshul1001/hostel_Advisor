import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(){

    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="Details" >

                    <button type="button" class="btn btn-light">Sign Up</button>
                    <button type="button" class="btn btn-light">Log In</button>
                </div>
            </div>
        </nav>
    );
} 

import React from 'react'
// import PropTypes from 'prop-types';
import {Link ,link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar(){

    const {loginWithRedirect,logout,isAuthenticated,user}=useAuth0();

    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">GSRooms</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="Details" >
                    <Link to="/Post">Post Your Room</Link>

                    {

                        isAuthenticated
                            ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                            :
                        <button onClick={() => loginWithRedirect()}>Log In</button>             
                    }

                </div>
            </div>
        </nav>
    );
} 

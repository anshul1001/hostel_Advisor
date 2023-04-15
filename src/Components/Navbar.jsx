import React, { useContext } from 'react'
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { AuthContext } from '../Context/authContext';

export default function Navbar(){

    const {currentUser,logout} = useContext(AuthContext);

    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">GSRooms</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="Details" >
                    <Link to="/Post" className='Link'>Post Your Room</Link>
                </div>
                <span >{currentUser?.username}</span>
                        {currentUser ? (
                    <span onClick={logout}>Logout</span>
                ) : (
                    <Link className="Link" to="/login">
                    Login
                    </Link>
                )}
                
            </div>
        </nav>
    );
} 

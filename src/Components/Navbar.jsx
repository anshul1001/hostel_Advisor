// import React, { useContext } from 'react'
// // import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// import { AuthContext } from '../Context/authContext';



// export default function Navbar(){

//     const {currentUser,logout} = useContext(AuthContext);
//     return (
        
//         <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" >
//             <div className="container-fluid">
//                 <Link to="/" className="navbar-brand">GSRooms</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="Details" >
//                     <Link to="/Post" className='Link'>Post Your Room</Link>
//                 </div>
//                 <span >{currentUser?.username}</span>
//                         {currentUser ? (
//                     <span onClick={logout}>Logout</span>
//                 ) : (
//                     <Link className="Link" to="/login">
//                     Login
//                     </Link>
//                 )}
                
//             </div>
//         </nav>
     
  
//     );
// } 

import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { BsFillHouseAddFill, BsPersonCircle } from 'react-icons/bs';
import './Navbar.css';
import { AuthContext } from '../Context/authContext';

export default function Navbar(){
    
    const {currentUser,logout} = useContext(AuthContext);
    return (
        
        <>

        <nav className="navbar navbar-expand-lg" >

            <div className="container-fluid">

                <Link className="navbar-brand d-flex flex-row" to="/">

                    <BsFillHouseAddFill style={{width:'1.5rem',height:'1.5rem'}} />

                    <p >
                        gsAdvisor
                    </p>
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav">
                        
                        <li className="nav-item"
                            style={{marginRight:'3rem'}}
                        >
                            <div className="dropdown">

                                <Link className="btn dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Get Started
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/post">
                                            Post Room
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Search">
                                            Check Rooms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/navigate">
                                            Navigate Rooms
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        
                        <span >  {currentUser?.username}</span>
                        {currentUser ? (
                            <>
                            <BsPersonCircle style={{width:'1.5rem',height:'1.5rem'}} />
                    <span onClick={logout}>
                        <li className="nav-item">
                         <button type="button">
                                  Logout
                            </button>
                        </li>
                    </span>
                    </>
                ) : (
                    <>
                    <li className="nav-item">
                         <button type="button">
                                <Link className="list-group-item" to="/register" >
                                    Sign Up
                                </Link>
                            </button>
                        </li>

                        <li className="nav-item"
                        >

                            <button type="button">
                                <Link className="list-group-item" to="/login" >
                                    Login
                                </Link>
                            </button>
                        </li>
                        </>
                )}
                           
                    </ul>
                </div>
            </div>
        </nav>

        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary" >
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
        </nav> */}

        </>
    );
}
import React from "react";
import './Footer.css';
import {TiInfoLarge} from 'react-icons/ti';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';

const Footer = () => {
  
      return (

<div className="footer" >
            
            <div className="footer-item about">

                  <div className="icon">

                        <TiInfoLarge/>
                  </div>
                  <ul>

                  <li>Vallabh nagar</li>
                  <li>Vijay Nagar</li>
                  <li>Malwa Mill</li>
                  </ul>

                 
            </div>

            <div className="footer-item mail">

                  <div className="icon">

                        <SiGmail/>
                  </div>

                  <ul>

                        <li>agrawalabhishek2020@gmail.com</li>
                        <li>akshatmtiwari@gmail.com</li>
                        <li>anshulsharma@gmail.com</li>
                  </ul>

            </div>

            <div className="footer-item contact">

                  <div className="icon">

                        <BsFillTelephoneFill/>
                  </div>

                  <ul>

                        <li>+91 6262884703</li>
                        <li>+91 9589281960</li>
                        <li>+91 7440349488</li>
                  </ul>
            </div>

      </div>
      

           
      );
};

export default Footer;
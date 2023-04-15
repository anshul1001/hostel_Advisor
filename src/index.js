import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './Context/authContext';
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-vt31uefvl0wsct8j.us.auth0.com"
  //   clientId="a2UGiI1lob8mLSwLnXWLqE5Izmc3SrJb"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
 <AuthContextProvider>
  <React.StrictMode><App /></React.StrictMode>
  </AuthContextProvider>
  
  
  // </Auth0Provider>
);

reportWebVitals();

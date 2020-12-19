import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
   
    <div class="menu">
       <a class="skip-to-content-link" href='#main'>
           Skip to content
       </a>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li> 
        </ul>
    </div>
  );
}

export default Menu;
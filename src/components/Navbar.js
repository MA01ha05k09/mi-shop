import React from 'react';
import "../styles/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      <a>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/768px-Xiaomi_logo.svg.png' className='milogo' alt='Xiaomi Logo' />
      </a>

      <a className='navlinks' href='/miphones'> Mi phones</a>
      <a className='navlinks' href='/redmiphones'> Redmi phones</a>
      <a className='navlinks' href='/tv'> TV</a>
      <a className='navlinks' href='/laptops'> Laptops</a>
      <a className='navlinks' href='/lifestyle'> Fitness & Lifestyle</a>
      <a className='navlinks' href='/home'> Home</a>
      <a className='navlinks' href='/audio'> Audio</a>
      <a className='navlinks' href='/accessories'> Accessories</a>
      
      <div className='searchbox '>
        <input type='text' name='search' placeholder='Search products' />
      </div>
    </div>
  );
}

export default Navbar;

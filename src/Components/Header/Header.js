import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/reddit-logo.png';

function Header() {
  return (
    <header>
      <Link className='main-link' to='/'>
        <img className='logo' src={logo} alt='Reddit logo'></img>
        <h1 className='header-title'>Reddit React App</h1>
      </Link> 
    </header>
  );
}

export default Header;
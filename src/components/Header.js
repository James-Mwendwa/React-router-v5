import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/profile">Profile</Link>
    </div>

  )
}

export default Header;

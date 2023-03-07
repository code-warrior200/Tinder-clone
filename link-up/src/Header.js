import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './assets/logo.png';
import "./Header.css";
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link>
        <IconButton>
          <PersonIcon className='header__icon' fontSize='large'/>  
        </IconButton>
      </Link>
      <Link to="/">
        <img className='header__logo' src={logo} alt="/" />
      </Link>
      
      <Link to= "/chat">
        <IconButton>
          <ForumIcon className='header__icon' fontSize='large'/>
        </IconButton>
      </Link>
    </div>
  )
}

export default Header;
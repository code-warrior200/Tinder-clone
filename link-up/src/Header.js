import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './assets/logo.png';
import "./Header.css";
import { IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className='header__icon' fontSize='large'/>  
      </IconButton>
      <img className='header__logo' src={logo} alt="/" />
      <IconButton>
        <ForumIcon className='header__icon' fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default Header;
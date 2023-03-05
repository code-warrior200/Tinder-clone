import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './assets/logo.png';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <PersonIcon/>
      <img src={logo} alt="/" />
      <ForumIcon/>
    </div>
  )
}

export default Header;
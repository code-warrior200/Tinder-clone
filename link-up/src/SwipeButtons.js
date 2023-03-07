import React from 'react';
import './SwipeButtons.css';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
        <IconButton><ReplayOutlinedIcon fontSize='large'className='replay' /></IconButton>
        <IconButton><CloseIcon fontSize='large' className='close'/></IconButton>
        <IconButton><StarRateIcon fontSize='large' className='star'/></IconButton>
        <IconButton><FavoriteIcon fontSize='large' className='favorite'/></IconButton>
        <IconButton><FlashOnIcon fontSize='large' className='flash'/></IconButton>
    </div>
  )
}

export default SwipeButtons;
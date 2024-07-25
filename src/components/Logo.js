import React from 'react';
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
// react icons
//import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from 'themes/Styles';
//import { pink } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <a 
        href="https://bacode.com.ar" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ cursor: 'pointer' }} // Cambia el puntero a una manito
      >
        <img 
          src={`${process.env.PUBLIC_URL}/bodie.png`} 
          width='50px' 
          height='50px' 
          alt='bodie' 
          style={{ position: 'relative', top: '-5px' }} 
        />
      </a>
    </Box>
  );
};

export default Logo;
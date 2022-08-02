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
<img src="https://logosmarcas.net/wp-content/uploads/2020/07/Airbnb-Logo-2014-Presente.jpg" width='120px' height='60px' alt='airbnb' />
      
    </Box>
  );
};

export default Logo;

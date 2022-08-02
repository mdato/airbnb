import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// react icons
//import { BsGlobe } from 'react-icons/bs';
import { FiGlobe } from 'react-icons/fi';
//import { AiOutlineMenu } from 'react-icons/ai';
//import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from 'themes/Styles';
import { IoMdMenu } from 'react-icons/io';
import { GrUserManager } from 'react-icons/gr';

const ProfileSet = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#"> <span style={{fontWeight: 'bolder', fontSize: '14px'}}>Become a host</span></Link>
      <Stack>
        <Button>
          <FiGlobe size={16} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: '1px solid #ddd',
            maxHeight: 40,
            maxWidth: 80,
          }}
        >
          <Stack>
            <IoMdMenu size={24} />
            <GrUserManager size={24} ml={-5} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSet;

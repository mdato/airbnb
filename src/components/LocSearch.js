import React from 'react';

import Button from '@mui/material/Button';
//import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
//import { TbMinusVertical } from 'react-icons/tb';
import { pink } from '@mui/material/colors';

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: '|' },
  { id: 3, text: 'Any week' },
  { id: 4, text: '|' },
  { id: 5, text: 'Add guests', withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 15,
       
        maxHeight: 50,
        pb: 4,
        pt: 0,
        mt: -2,
      }}
      elevation={3}
    >
      <Stack
        sx={{
          borderRadius: 10,
          borderColor: (theme) => theme.palette.text.secondary,
          pl: 2,
          pb: 4,
          pt: 0,
          mt: -2,
        }}
        
        
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography

                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={pink[400]} size={36} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;

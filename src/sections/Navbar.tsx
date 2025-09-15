import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: '2px solid #E5E7EB',
      }}
    >
      <Typography>Daniil Sereda</Typography>
      <Box>
        <Button>About</Button>
        <Button>Skills</Button>
        <Button>Projects</Button>
        <Button>Experience</Button>
        <Button>Contact</Button>
      </Box>
    </Box>
  );
};

export default Navbar;

import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 3,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography align="center">© 2025 Daniil Sereda. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;

import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { sm: 'column', md: 'row' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>Hi, I&apos;m Daniil Sereda — Frontend Developer</Typography>
        <Typography>
          Crafting modern web experiences with React, Next.js, Tailwind CSS, and SEO optimization
        </Typography>
        <Box>
          <Button variant="contained">View projects</Button>
          <Button variant="outlined">Contact me</Button>
        </Box>
      </Box>
      <Box
        component="img"
        src="/Avatar.jpg"
        alt="Daniil avatar"
        sx={{
          width: { xs: 150, sm: 200, md: 300 },
          height: { xs: 150, sm: 200, md: 300 },
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default Hero;

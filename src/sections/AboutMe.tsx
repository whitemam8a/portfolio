import { Box, Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#E5E7EB' }}>
      <Typography>About Me</Typography>
      <Typography>
        I&apos;m a passionate frontend developer with 3+ years of experience creating responsive and
        user- friendly web applications. I specialize in React ecosystem and modern JavaScript, with
        a strong focus on performance optimization and clean code. When I&apos;m not coding, I enjoy
        learning new technologies and contributing to open-source projects.
      </Typography>
    </Box>
  );
};

export default AboutMe;

import Heading from '@/components/Heading';
import { Box, Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#9BBCFF',
        alignItems: 'center',
        padding: '80px 10%',
        borderRadius: '100px 0px',
        gap: 5,
      }}
    >
      {/* <Typography component="h3" className="text-[30px]">
        About Me
      </Typography> */}
      <Heading>About Me</Heading>
      <Typography className="text-center max-w-[700px] text-[#525252]">
        I&apos;m a passionate frontend developer with 3+ years of experience creating responsive and
        user- friendly web applications. I specialize in React ecosystem and modern JavaScript, with
        a strong focus on performance optimization and clean code. When I&apos;m not coding, I enjoy
        learning new technologies and contributing to open-source projects.
      </Typography>
    </Box>
  );
};

export default AboutMe;

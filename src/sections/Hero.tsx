import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { sm: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: 3,
        padding: '80px 10%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h1" sx={{ fontSize: '60px' }}>
          Hi, I&apos;m Daniil Sereda — Frontend Developer
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '18px', color: '#525252' }}>
          Crafting modern web experiences with React, Next.js, Tailwind CSS, and SEO optimization
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
          <Button
            variant="contained"
            sx={{ paddingInline: 3, paddingBlock: 1, borderRadius: 3, backgroundColor: 'black' }}
          >
            View projects
          </Button>
          <Button
            variant="outlined"
            sx={{
              paddingInline: 3,
              paddingBlock: 1,
              borderRadius: 3,
              borderColor: '#D4D4D4',
              color: 'black',
            }}
          >
            Contact me
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        src="images/Avatar.jpg"
        alt="Daniil avatar"
        sx={{
          width: { xs: 150, sm: 200, md: 400 },
          aspectRatio: '1 / 1',
          // height: { xs: 150, sm: 200, md: 400 },
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default Hero;

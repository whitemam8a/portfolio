import Heading from '@/components/Heading';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const AboutMe = () => {
  const t = useTranslations();

  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#9BBCFF',
        width: { xs: '100%', md: '80%' },
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: { xs: '-30px', md: '0px' },
        padding: '80px 10%',
        borderRadius: { xs: '0px', md: '100px 0px' },
        gap: 5,
        boxShadow: '4px 10px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Heading>{t('About me')}</Heading>
      <Typography className="text-center max-w-[700px] text-[#525252]">{t('about')}</Typography>
    </Box>
  );
};

export default AboutMe;

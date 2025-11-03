'use client';

import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const Hero = () => {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { sm: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: 3,
        padding: '80px 10%',
        backgroundImage: {
          xs: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.33)), url(/images/Daniil-pano.jpg)',
          sm: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.33)), url(/images/Daniil-pano.jpg)',
          md: 'none',
          lg: 'none',
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '40px', lg: '60px' }, fontWeight: 600 }}>
          {t('Welcome')}
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: '18px', md: '20px' }, color: { sm: '#000000ff', md: '#525252' } }}
        >
          {t('Subtitle')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
          <Link href={`/${locale}/projects`}>
            <Button
              variant="contained"
              sx={{
                paddingX: { xs: 2, md: 5 },
                paddingY: { xs: 1, md: 2 },
                borderRadius: 3,
                backgroundColor: 'black',
                fontSize: { xs: '14px', md: '16px' },
                minHeight: '50px',
              }}
            >
              {t('View Projects')}
            </Button>
          </Link>
          <Button
            variant="outlined"
            sx={{
              paddingX: { xs: 2, md: 5 },
              paddingY: { xs: 1, md: 2 },
              borderRadius: 3,
              borderColor: '#D4D4D4',
              color: 'black',
              backgroundColor: '#c8c8c860',
              fontSize: { xs: '14px', md: '16px' },
              minHeight: '50px',
            }}
            onClick={() => scrollToSection('contacts')}
          >
            {t('Contact Me')}
          </Button>
        </Box>
      </Box>

      <Box
        component="img"
        src="images/Avatar2.jpg"
        alt="Daniil avatar"
        sx={{
          width: { xs: 150, sm: 200, md: 400 },
          aspectRatio: '1 / 1',
          // height: { xs: 150, sm: 200, md: 400 },
          borderRadius: '50%',
          objectFit: 'cover',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Box>
  );
};

export default Hero;

'use client';

import Heading from '@/components/Heading';
import { GithubIcon, LinkedInIcon, MailIcon } from '@/icons/icons';
import { Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Contacts = () => {
  const t = useTranslations();

  return (
    <Box
      id="contacts"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        paddingInline: '15%',
        gap: 5,
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 6,
          gap: 4,
          borderRadius: { xs: '50px', md: '100px' },
          backgroundColor: '#9BBCFF',
          boxShadow: '4px 10px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Heading>Let&apos;s Work Together</Heading>
        <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '18px' }}>
          {t('contactText')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', lg: 'row' } }}>
          <Button
            variant="outlined"
            onClick={() => (window.location.href = 'mailto:daniil.hardwork@gmail.com')}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              color: '#000000ff',
              borderColor: '#000000ff',
              maxWidth: '250px',
            }}
          >
            <MailIcon />
            <span className="truncate">daniil.hardwork@gmail.com</span>
          </Button>

          <Button
            variant="outlined"
            href="https://github.com/whitemam8a"
            target="_blank"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              color: '#000000ff',
              borderColor: '#000000ff',
              maxWidth: '250px',
            }}
          >
            <GithubIcon style={{ color: '#000000ff' }} />
            <span className="truncate">github.com/whitemam8a</span>
          </Button>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/daniilsereda/"
            target="_blank"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              color: '#000000ff',
              borderColor: '#000000ff',
              maxWidth: '250px',
            }}
          >
            <LinkedInIcon sx={{ color: '#0a66c2' }} />
            <span className="truncate">linkedin.com/in/daniilsereda/</span>
          </Button>
        </Box>

        <Button
          sx={{ backgroundColor: '#efa614ff' }}
          component="a"
          variant="contained"
          href="/CV/Daniil Sereda.pdf"
          download="/CV/Daniil Sereda.pdf"
        >
          {t('downloadCV')}
        </Button>
      </Box>
    </Box>
  );
};

export default Contacts;

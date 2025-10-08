'use client';

import Heading from '@/components/Heading';
import { GithubIcon, LinkedInIcon, MailIcon } from '@/icons/icons';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Contacts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingInline: '15%',
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Heading>Let&apos;s Work Together</Heading>
        <Typography>
          I&apos;m always interested in new opportunities and exciting projects. Feel free to reach
          out!
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', lg: 'row' } }}>
          <Button
            variant="outlined"
            className="flex items-center justify-start gap-2 max-w-[250px] normal-case"
          >
            <MailIcon />
            <span className="truncate">daniil.hardwork@gmail.com</span>
          </Button>

          <Button
            variant="outlined"
            className="flex items-center justify-start gap-2 max-w-[250px] normal-case"
          >
            <GithubIcon />
            <span className="truncate">github.com/whitemam8a</span>
          </Button>
          <Button
            variant="outlined"
            className="flex items-center justify-start gap-2 max-w-[250px] normal-case"
          >
            <LinkedInIcon />
            <span className="truncate">linkedin.com/in/daniilsereda/</span>
          </Button>
        </Box>
        <Button variant="contained">GET IN TOUCH</Button>
      </Box>
    </Box>
  );
};

export default Contacts;

'use client';

import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const handleNavigation = (id: string) => {
    if (pathname === `/${locale}`) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/${locale}/#${id}`);

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: '2px solid #E5E7EB',
        padding: '10px 10%',
        backgroundColor: { xs: '#ffffffff', md: '#2563EB' },
      }}
    >
      <Box sx={{ alignContent: 'center' }}>
        <Link href={'/'}>
          <Button>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: { xs: '#000000ff', sm: '#FFFFFF' },
              }}
            >
              Daniil Sereda
            </Typography>
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          '& button': {
            fontSize: '18px',
            color: '#525252',
            '&:hover': {
              color: '#000000ff',
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        <LanguageSwitcher sx={{ paddingRight: 0 }} />
        <Button
          onClick={() => handleNavigation('about')}
          variant="text"
          sx={{ color: '#FFFFFF !important' }}
        >
          {t('About')}
        </Button>
        <Button onClick={() => handleNavigation('skills')} sx={{ color: '#FFFFFF !important' }}>
          {t('Skills')}
        </Button>
        <Button onClick={() => handleNavigation('projects')} sx={{ color: '#FFFFFF !important' }}>
          {t('Projects')}
        </Button>
        <Button onClick={() => handleNavigation('experience')} sx={{ color: '#FFFFFF !important' }}>
          {t('Experience')}
        </Button>
        <Button onClick={() => handleNavigation('contact')} sx={{ color: '#FFFFFF !important' }}>
          {t('Contact')}
        </Button>
      </Box>

      <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {[
            { label: t('About'), id: 'about' },
            { label: t('Skills'), id: 'skills' },
            { label: t('Projects'), id: 'projects' },
            { label: t('Experience'), id: 'experience' },
            { label: t('Contact'), id: 'contact' },
          ].map((item) => (
            <ListItem
              key={item.id}
              onClick={() => {
                handleNavigation(item.id);
                setOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <ListItem>
          <LanguageSwitcher sx={{ fontSize: '18px' }} />
        </ListItem>
      </Drawer>
    </Box>
  );
};

export default Navbar;

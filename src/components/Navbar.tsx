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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: '2px solid #E5E7EB',
        padding: '10px 10%',
      }}
    >
      {/* Логотип */}
      <Box sx={{ alignContent: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '400' }}>Daniil Sereda</Typography>
      </Box>

      {/* Кнопки (desktop only) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' }, // скрыть на xs/sm, показать с md
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
        <Button>About</Button>
        <Button>Skills</Button>
        <Button>Projects</Button>
        <Button>Experience</Button>
        <Button>Contact</Button>
      </Box>

      {/* Бургер (mobile only) */}
      <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      {/* Drawer меню */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((text) => (
            <ListItem key={text} onClick={toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

'use client';

import Heading from '@/components/Heading';
import ProjectCard from '@/components/ProjectCard';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 10%',
        gap: 5,
      }}
    >
      <Heading>Featured Projects</Heading>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <ProjectCard
          image="images/opengate.png"
          name={'E-commerce Dashboard'}
          description={
            'A modern admin dashboard built with React and TypeScript, featuring real- time analytics and inventory management.'
          }
        />
        <ProjectCard
          image="images/swimming pool.png"
          name={'E-commerce Dashboard'}
          description={
            'A modern admin dashboard built with React and TypeScript, featuring real- time analytics and inventory management.'
          }
        />
        <ProjectCard
          name={'E-commerce Dashboard'}
          description={
            'A modern admin dashboard built with React and TypeScript, featuring real- time analytics and inventory management.'
          }
        />
      </Box>
      <Button>See more projects</Button>
    </Box>
  );
};

export default Projects;

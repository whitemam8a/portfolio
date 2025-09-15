'use client';

import ProjectCard from '@/components/ProjectCard';
import { GithubIcon } from '@/icons/icons';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const Projects = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <Typography>Featured Projects</Typography>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <ProjectCard
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
        <ProjectCard
          name={'E-commerce Dashboard'}
          description={
            'A modern admin dashboard built with React and TypeScript, featuring real- time analytics and inventory management.'
          }
        />
      </Box>
      <Typography>See more projects</Typography>
    </Box>
  );
};

export default Projects;

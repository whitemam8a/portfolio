'use client';

import { Box } from '@mui/material';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Portfolio Website', description: 'Next.js + MUI project' },
    { id: 2, title: 'E-commerce App', description: 'React + Stripe' },
    { id: 3, title: 'Dashboard', description: 'Admin panel with charts' },
    { id: 4, title: 'Landing Page', description: 'Tailwind + Framer Motion' },
    { id: 5, title: 'Blog Platform', description: 'Markdown + SEO optimized' },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        p: { xs: 2, md: 4 },
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} name={project.title} description={project.description} />
      ))}
    </Box>
  );
};

export default ProjectsPage;

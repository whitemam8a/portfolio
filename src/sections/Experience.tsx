import ExprecienceCard from '@/components/ExprecienceCard';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Experience = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography>Experience & Achievements</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ExprecienceCard
          jobName={'Frontend Developer at TechCorp'}
          date={'2023 - Present'}
          description={
            'Developed and maintained 5+ client projects using React and Next.js, improving performance by 40%.'
          }
        />
      </Box>
    </Box>
  );
};

export default Experience;

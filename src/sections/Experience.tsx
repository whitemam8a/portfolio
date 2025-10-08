import ExprecienceCard from '@/components/ExprecienceCard';
import Heading from '@/components/Heading';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Experience = () => {
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
      <Heading>Experience & Achievements</Heading>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <ExprecienceCard
          jobName={'Frontend Developer at LiberSave'}
          date={'2024 - Present'}
          description={
            'Developed and maintained 5+ client projects using React and Next.js, improving performance by 40%.'
          }
        />
        <ExprecienceCard
          jobName={'Data Operator at Saule IT Services'}
          date={'2023 - 2024'}
          description={
            'Developed and maintained 5+ client projects using React and Next.js, improving performance by 40%.'
          }
        />
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

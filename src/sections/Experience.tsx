import ExprecienceCard from '@/components/ExprecienceCard';
import Heading from '@/components/Heading';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Experience = () => {
  const t = useTranslations();

  return (
    <Box
      id="experience"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 10%',
        gap: 5,
      }}
    >
      <Heading>{t('Experience & Achievements')}</Heading>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <ExprecienceCard
          jobName={'Frontend Developer at LiberSave'}
          date={'2024 - current'}
          description={t('liber')}
        />
        <ExprecienceCard
          jobName={'Sports Betting Operations & Risk Control Specialis'}
          date={'2023 - 2024'}
          description={t('saule')}
        />
        <ExprecienceCard
          jobName={'Web developer at Mainor'}
          date={'2022 - 2025'}
          description={t('mainor')}
        />
      </Box>
    </Box>
  );
};

export default Experience;

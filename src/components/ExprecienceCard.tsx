import { Box, Typography } from '@mui/material';
import React from 'react';

type ExprecienceCardProps = {
  jobName: string;
  date: string;
  description: string;
};

const ExprecienceCard: React.FC<ExprecienceCardProps> = ({ jobName, date, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '3px solid #D4D4D4',
        paddingInline: '20px',
      }}
    >
      <Typography sx={{ fontSize: '19px', fontWeight: '400' }}>{jobName}</Typography>
      <Typography sx={{ fontSize: '16px', color: '#525252' }}>{date}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ExprecienceCard;

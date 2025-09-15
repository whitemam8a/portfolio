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
        borderLeft: '2px solid #D4D4D4',
        paddingInline: '20px',
      }}
    >
      <Typography>{jobName}</Typography>
      <Typography>{date}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ExprecienceCard;

import { Box, Typography } from '@mui/material';
import React from 'react';

type ExprecienceCardProps = {
  jobName: string;
  date: string;
  description: string;
  color?: string;
};

const ExprecienceCard: React.FC<ExprecienceCardProps> = ({
  jobName,
  date,
  description,
  color = '#000000ff',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderLeft: `3px solid ${color}`,
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

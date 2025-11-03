import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { GithubIcon } from '../icons/icons';

type ProjectCardProps = {
  image?: string;
  name: string;
  description: string;
  url?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, description, url }) => {
  return (
    <Card
      sx={{
        minWidth: 345,
        height: 355,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 10px 5px rgba(0, 0, 0, 0.1)',
        border: '1px solid #a7a7a775',
        borderRadius: '9px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="E-commerce Dashboard"
          sx={{
            objectFit: 'cover',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ mt: 'auto' }}>
        <Button
          component="a"
          variant="contained"
          size="small"
          sx={{ display: 'flex', gap: 1, justifyContent: 'center', bgcolor: '#000000' }}
          href={url}
          target="_blank"
        >
          <GithubIcon sx={{ fontSize: '16px' }} />
          <Typography variant="button" sx={{ fontSize: '14px' }}>
            View on GitHub
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

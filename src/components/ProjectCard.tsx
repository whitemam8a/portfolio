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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="E-commerce Dashboard" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{ display: 'flex', gap: 1, justifyContent: 'center', bgcolor: '#000000' }}
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

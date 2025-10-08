'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  NextJSIcon,
  ReactIcon,
  TsIcon,
  TailwindIcon,
  GitIcon,
  FigmaIcon,
  SeoIcon,
} from '@/icons/icons';
import Heading from '@/components/Heading';

const technologies = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextJSIcon /> },
  { name: 'TypeScript', icon: <TsIcon /> },
  { name: 'Tailwind', icon: <TailwindIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'SEO', icon: <SeoIcon /> },
];

const Skills = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '80px 10%',
        gap: 5,
      }}
    >
      <Heading>Skills & Technologies</Heading>
      <Box sx={{ width: '100%' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={300}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 300 },
            1200: { slidesPerView: 5, spaceBetween: 100 },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  padding: '20px',
                  bgcolor: '#FAFAFA',
                  borderRadius: '8px',
                }}
              >
                {tech.icon}
                <Typography>{tech.name}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Skills;

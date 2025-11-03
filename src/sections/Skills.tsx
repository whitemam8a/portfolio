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
import { useTranslations } from 'next-intl';

const technologies = [
  { name: 'React', icon: <ReactIcon style={{ color: '#99c3ff' }} /> },
  { name: 'Next.js', icon: <NextJSIcon /> },
  { name: 'TypeScript', icon: <TsIcon style={{ color: '#719AED' }} /> },
  { name: 'Tailwind', icon: <TailwindIcon style={{ color: '#00bcff' }} /> },
  { name: 'Git', icon: <GitIcon style={{ color: '#F1502F' }} /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'SEO', icon: <SeoIcon /> },
];

const Skills = () => {
  const t = useTranslations();

  return (
    <Box
      id="skills"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: '50px',
        padding: '80px 10%',
        gap: 5,
        borderRadius: { xs: '70px', md: '100px' },
        background: 'linear-gradient(to bottom, #5786eaff 0%, transparent 50%)',
      }}
    >
      <Heading>{t('Skills & Technologies')}</Heading>
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '20px',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none',
            background:
              'linear-gradient(to right, rgba(155, 188, 255, 0.75) 20%, rgba(250,250,250,0))',
            filter: 'blur(2px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none',
            background: 'linear-gradient(to left, rgba(250,250,250,1) 20%, rgba(250,250,250,0))',
            filter: 'blur(2px)',
          }}
        /> */}
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
            <SwiperSlide
              key={index}
              style={{ display: 'flex', justifyContent: 'center', paddingBottom: '5px' }}
            >
              <Box
                sx={{
                  minWidth: '135px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  padding: '20px',
                  bgcolor: '#fafafaff',
                  borderRadius: '8px',
                  border: '1px solid #a7a7a775',
                  boxShadow: '4px 10px 5px rgba(0, 0, 0, 0.1)',
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

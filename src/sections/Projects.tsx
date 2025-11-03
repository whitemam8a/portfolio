'use client';

import Heading from '@/components/Heading';
import ProjectCard from '@/components/ProjectCard';
import { Box, Button, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Projects = () => {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale;

  return (
    <Box
      id="projects"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '80px 0%', md: '80px 10%' },
        gap: 5,
        borderRadius: { xs: '70px', md: '100px' },
        background: 'linear-gradient(to top, #5786eaff 0%, transparent 50%)',
      }}
    >
      <Heading>{t('Featured Projects')}</Heading>

      <Box sx={{ width: '100%' }}>
        <Swiper
          style={{ padding: '20px' }}
          modules={[Autoplay]}
          spaceBetween={300}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 100 },
            768: { slidesPerView: 2, spaceBetween: 150 },
            1200: { slidesPerView: 3, spaceBetween: 80 },
          }}
        >
          <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard
              image="images/projects/opengate.png"
              name={'OPENGATE nft'}
              description={t('OpenGatedesc')}
              url="https://github.com/whitemam8a/OPENGATE"
            />
          </SwiperSlide>
          <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard
              image="images/projects/swimming pool.png"
              name={'Swimming school'}
              description={t('Swimmingdesc')}
              url="https://github.com/whitemam8a/SIA-BaKA-RiNi-swimming-school"
            />
          </SwiperSlide>
          <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard
              image="images/projects/libersave.png"
              name={'Liber Save'}
              description={t('Liberdesc')}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Link href={`/${locale}/projects`}>
        <Button
          variant="text"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#000000ff',
            position: 'relative',
            padding: '8px 16px',
            textTransform: 'none',
            transition: 'color 0.3s ease',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '2px',
              backgroundColor: 'currentColor',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease',
            },
            '&:hover': {
              color: 'primary.main',
              '&::after': {
                transform: 'scaleX(1)',
              },
            },
          }}
        >
          {t('See more projects')}
        </Button>
      </Link>
    </Box>
  );
};

export default Projects;

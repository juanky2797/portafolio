'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/tesis.png',
    category: 'Redes neuronales',
    name: 'Trabajo de grado - Maestria',
    description:
      'Aprovechamiento de bioseñales para el reconocimiento del estrés: A Estudio comparativo de redes neuronales profundas y Modelos de clasificadores superficiales',
    link: '/',
    github: '/',
  },
  {
    image: '/work/iot.png',
    category: 'IoT, Amazon Web Services',
    name: 'De peces a Pokémon: un proyecto de IoT que utiliza ESP EYE, visión por computadora y AWS en tiempo real Análisis de datos y juegos',
    
    
    description:
      '',
    link: '/',
    github: '/',
  },
  {
    image: '/work/da.png',
    category: 'Analisis de datos',
    name: 'Análisis de confiabilidad de (r,s)-fuera de-(m,n):F Sistemas de celosía',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/ta.png',
    category: 'Analisis de texto',
    name: 'Cerrando la brecha entre la similitud lírica y melódica: un análisis empírico de pares de canciones*',
    description:
      '',
    link: '/',
    github: '/',
  },
  
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Ultimos proyectos</h2>
          <p className='subtitle mb-8'>
          </p>
          
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

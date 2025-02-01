import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Juan Montenegro',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'juanc180310@gmail.com',
  },
  
  {
    icon: <GraduationCap size={20} />,
    text: 'Master of Science on Computer Science',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Chiriqui, Panama',
  },
];

const qualificationData = [
  {
    title: 'educacion',
    data: [
      {
        university: 'Trinity College Dublin',
        qualification: 'Master of Science on Computer Science',
        years: '2022 - 2023',
      },
      {
        university: 'Universidad Tecnologica de Panama',
        qualification: 'Licenciado en Desarrollo de Software',
        years: '2016 - 2020',
      },
      {
        university: 'Centro de Psicotecnologia',
        qualification: 'Especializacion en Neurofeedback',
        years: '2023',
      },
    ],
  },
  {
    title: 'Experiencia',
    data: [
      {
        company: 'Universidad Tecnológica de Panamá',
        role: 'Docente Universitario',
        years: '2024 - actualidad',
      },
      {
        company: 'Bolsa Latinoamericana de Valores',
        role: 'Analista Ingeniero de Software',
        years: '2021 - 2022',
      },
      {
        company: 'Universidad Tecnologica de Panama',
        role: 'Analista de datos',
        years: '2020 - 2021',
      },
      {
        company: 'Pontificia Universidad Javeriana - Colombia',
        role: 'Asistente de Investigacion',
        years: '2020',
      },
    ],
  },
];

const skillData = [
  {
    title: 'Habilidades',
    data: [
     
      {
        name: 'Front-end Development',
      },
      {
        name: 'Administracion y gestion de proyectos de Ingenieria de Software',
      },
      {
        name: 'Javascript, Flutter',
      },
      {
        name: 'Back-end Development',
      },
      {
        name: 'Desarrollador Machine Learning',
      },
      {
        name: 'Desarrollador de Inteligencia Artificial',
      },
      {
        name: 'Experto en Internet de las cosas',
      },
      {
        name: 'Creacion de contenido digital',
      },
      {
        name: 'Manejo de equipo tecnologico Neurofeedback y estimulacion magnetica transcraneal',
      },
      {
        name: 'Aficionado a la nutricion y salud fisica - mental, te enseño a como regenerar tu cuerpo - mente a traves de los habitos saludables y la ciencia moderna',
      },
    ],
  },
  {
    title: 'Herramientas',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          Acerca de mi
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/juan3.jpg'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Informacion personal
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Calificaciones
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='Habilidades'>
                  Habilidades
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                    Calidad de servicio inigualable                     </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    🚀💻 ¡Hola! Soy un Ingeniero de Software y Científico de la Computación especializado en Sistemas Inteligentes, además de ser un experto en Neurofeedback. Mi pasión abarca también el mundo de la nutrición y el entrenamiento. Exploro la sinergia entre la tecnología de vanguardia, la ciencia del cerebro, la nutrición consciente y el entrenamiento personalizado para brindarte una experiencia integral. Únete a mí en este viaje hacia un estilo de vida equilibrado y tecnológicamente avanzado. 🌐🧠🍏💪 #IngenieroDeSoftware #SistemasInteligentes #NeurofeedbackExpert #Nutrición #EntrenamientoPersonalizado
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Habilidades de Lenguaje</div>
                      <div className='border-b border-border'></div>
                      <div>Ingles, Español</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      Mi Asombroso viaje
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'Experiencia').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'Experiencia').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'educacion').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'educacion').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='Habilidades'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Lo que utilizo a diario</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Habilidades</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'Habilidades').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                   

                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Desarrollo Web y movil',
    description:
      'Desde el diseño elegante hasta la funcionalidad impecable, soy tu creador de experiencias en línea. Únete a mi viaje por el código y la creatividad mientras construyo soluciones web innovadoras.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Desarrollo de Inteligencia Artificial y Machine Learning',
    description:
      'Apasionado Desarrollador de Inteligencia Artificial y Machine Learning. Mi trayectoria se centra en dar vida a sistemas que aprenden y evolucionan. Desde algoritmos avanzados hasta soluciones predictivas, mi misión es explorar los límites de la inteligencia artificial para impulsar la innovación.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Neurofeedback - estilo de vida saludable',
    description:
      'En la intersección de la ciencia del cerebro y el bienestar: Especialista en Neurofeedback y Promotor de un Estilo de Vida Saludable. Mi enfoque es armonizar la mente y el cuerpo, utilizando la tecnología para potenciar el equilibrio mental.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Mis servicios
        </h2>
        {/* grid items */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full flex flex-col items-center relative pt-20 pb-8 px-4'
                key={index}
              >
                {/* Icon Container */}
                <div className='absolute -top-10 w-20 h-20 bg-white dark:bg-background flex justify-center items-center rounded-lg shadow-lg'>
                  {item.icon}
                </div>
                {/* Card Content */}
                <CardContent className='text-center'>
                  <CardTitle className='mb-4 text-xl lg:text-2xl'>
                    {item.title}
                  </CardTitle>
                  <CardDescription className='text-sm lg:text-base'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
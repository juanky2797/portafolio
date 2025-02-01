// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main className='space-y-12 md:space-y-20 lg:space-y-24'>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <About />
      </div>

      {/* Services Section */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <Services />
      </div>

      {/* Work Section */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <Work />
      </div>


      {/* CTA Section */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <Cta />
      </div>
    </main>
  );
}
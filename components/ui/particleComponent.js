// components/ui/ParticleComponent.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // Import loadFull correctly

const ParticleComponent = () => {
  const particlesInit = async (engine) => {
    console.log('Initializing particles engine:', engine); // Debugging
    await loadFull(engine); // Initialize the engine
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#000000', // Background color of the particle canvas
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff', // Color of the particles
          },
          links: {
            color: '#ffffff', // Color of the links between particles
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle', // Shape of the particles
          },
          size: {
            value: { min: 1, max: 5 }, // Size of the particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleComponent;
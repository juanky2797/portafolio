'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import ParticleComponent from 'components/ui/ParticleComponent';

const backgroundImage = '/background.png';  // Your Canva-designed background
const profilePicture = '/about/juan2.png';  // Updated Profile Picture Path

const initialLinks = [
  { id: 'youtube', name: 'YouTube Channel', url: 'https://www.youtube.com/channel/UCu3_-6X9ohJpSvR9zyTPdVg' },
  { id: 'linkedin', name: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/juan-carlos-montenegro-pino-183623150/' },
  { id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/juanky2797/' },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/juanc__26/' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@juanc__26' },
  { id: 'Patreon', name: 'Patreon', url: 'https://www.patreon.com/c/HolisticoWellness' },
];

export default function LinksPage() {
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    const storedClicks = JSON.parse(localStorage.getItem('clickCounts')) || {};
    const sortedLinks = [...initialLinks].sort((a, b) => (storedClicks[b.id] || 0) - (storedClicks[a.id] || 0));
    setLinks(sortedLinks);
  }, []);

  const handleClick = (id) => {
    const storedClicks = JSON.parse(localStorage.getItem('clickCounts')) || {};
    storedClicks[id] = (storedClicks[id] || 0) + 1;
    localStorage.setItem('clickCounts', JSON.stringify(storedClicks));
    const sortedLinks = [...links].sort((a, b) => (storedClicks[b.id] || 0) - (storedClicks[a.id] || 0));
    setLinks(sortedLinks);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient animate-gradient-flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ParticleComponent />

      <div className="relative mb-6 z-10">
        <motion.div
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 w-[180px] h-[180px] rounded-full bg-purple-500 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          whileHover={{ rotateY: 20 }}
          className="relative"
        >
          <Image
            src={profilePicture}
            width={160}
            height={160}
            alt="Profile Picture"
            className="rounded-full border-4 border-purple-500 shadow-lg object-cover"
          />
        </motion.div>
      </div>

      <motion.h1
        className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter options={{
          strings: ["Mis Enlaces", "Explora Mis Redes", "Conéctate Conmigo"],
          autoStart: true,
          loop: true,
        }}/>
      </motion.h1>

      <div className="w-full max-w-md space-y-6 mt-4 z-10">
        {links.map((link) => (
          <motion.div key={link.id} whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
            <Link href={link.url} onClick={() => handleClick(link.id)} target="_blank">
              <div className="w-full bg-gray-800 hover:bg-purple-600 px-6 py-4 rounded-lg text-center font-semibold text-lg transition-all shadow-lg cursor-pointer border-2 border-transparent hover:border-purple-400 hover:shadow-purple-400">
                {link.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
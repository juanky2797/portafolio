'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTiktokFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.youtube.com/channel/UCu3_-6X9ohJpSvR9zyTPdVg',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/juan-carlos-montenegro-pino-183623150/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://www.facebook.com/juanky2797/',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/juanc__26/',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://www.tiktok.com/@juanc__26',
    name: <RiTiktokFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

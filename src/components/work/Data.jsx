import Wiyorent         from '../../assets/wiyorent.jpg';
import Hair             from '../../assets/braids.jpg';
import Krossty          from '../../assets/krossty.jpg';
import Qrcode           from '../../assets/qrcode.jpg';
import CMC              from '../../assets/cmc.jpg';
import BeePlaceholder   from '../../assets/wiyorent.jpg';   // remplace par ta vraie image
import RemPlaceholder   from '../../assets/krossty.jpg';    // idem
import BotPlaceholder   from '../../assets/qrcode.jpg';     // idem

export const projectsData = [
  {
    id: 1,
    image: Wiyorent,
    title: 'Wiyorent',
    category: 'Web',
    link: 'https://wiyorent.vercel.app/',
    desc: 'Plateforme de location en ligne — architecture full-stack moderne.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
  },
  {
    id: 2,
    image: Hair,
    title: "Irène's Hair Braids",
    category: 'Web',
    link: 'https://irene-hair-braids.vercel.app/',
    desc: 'Site vitrine responsive pour salon de coiffure afro.',
    tech: ['React', 'TailwindCSS'],
  },
  {
    id: 3,
    image: Krossty,
    title: 'Krossty',
    category: 'Web',
    link: 'https://krossty.vercel.app/',
    desc: 'Application web moderne avec design soigné.',
    tech: ['React', 'NextJS', 'TailwindCSS'],
  },
  {
    id: 4,
    image: Qrcode,
    title: 'Générateur de QR-code',
    category: 'Web',
    link: 'https://qr-code-generator-six-nu.vercel.app/',
    desc: 'Outil de génération et téléchargement de QR codes personnalisés.',
    tech: ['React', 'JavaScript'],
  },
  {
    id: 5,
    image: CMC,
    title: 'Creamy Milk Candies',
    category: 'Web',
    link: 'https://creamy-milk-candies.vercel.app/',
    desc: 'Site e-commerce de confiseries avec panier interactif.',
    tech: ['React', 'TailwindCSS', 'JavaScript'],
  },
  {
    id: 6,
    image: BeePlaceholder,
    title: 'BEE — E-Commerce',
    category: 'App',
    link: null,
    desc: 'Architecture Full-Stack moderne : ReactJS, NextJS, MongoDB via Drizzle ORM. Interfaces responsives avec typage strict TypeScript.',
    tech: ['ReactJS', 'NextJS', 'MongoDB', 'Drizzle', 'TypeScript'],
  },
  {
    id: 7,
    image: RemPlaceholder,
    title: 'RememberMe',
    category: 'App',
    link: null,
    desc: 'Application de rappel et planification des tâches avec authentification JWT et opérations CRUD complètes.',
    tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'JWT', 'TailwindCSS'],
  },
  {
    id: 8,
    image: BotPlaceholder,
    title: 'XaufxBot / SynthBot',
    category: 'App',
    link: null,
    desc: 'Robots de trading algorithmique (marché de l\'or XAU/USD & indices) avec dashboard Streamlit de visualisation en temps réel.',
    tech: ['Python', 'Streamlit', 'Algorithmes', 'Data'],
  },
];

export const projectsNav = [
  { name: 'Tous' },
  { name: 'Web' },
  { name: 'App' },
];

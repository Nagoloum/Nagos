import Wiyorent from '../../assets/wiyorent.jpg';
import Hair from '../../assets/braids.jpg';
import Krossty from '../../assets/krossty.jpg';
import Qrcode from '../../assets/qrcode.jpg';
import CMC from '../../assets/cmc.jpg';

// Placeholder images for CV projects (use any existing asset as fallback)
// Remplace par les vraies images quand disponibles
import BeePlaceholder from '../../assets/wiyorent.jpg';
import RememberPlaceholder from '../../assets/krossty.jpg';
import BotPlaceholder from '../../assets/qrcode.jpg';

export const projectsData = [
  {
    id: 1,
    image: Wiyorent,
    title: 'Wiyorent',
    category: 'Web',
    link: 'https://wiyorent.vercel.app/',
    desc: 'Plateforme de location en ligne',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    image: Hair,
    title: "Irène's Hair Braids",
    category: 'Web',
    link: 'https://irene-hair-braids.vercel.app/',
    desc: 'Site vitrine pour salon de coiffure',
    tech: ['React', 'TailwindCSS'],
  },
  {
    id: 3,
    image: Krossty,
    title: 'Krossty',
    category: 'Web',
    link: 'https://krossty.vercel.app/',
    desc: 'Application web moderne',
    tech: ['React', 'NextJS'],
  },
  {
    id: 4,
    image: Qrcode,
    title: 'Générateur de QR-code',
    category: 'Web',
    link: 'https://qr-code-generator-six-nu.vercel.app/',
    desc: 'Outil de génération de QR codes',
    tech: ['React', 'JavaScript'],
  },
  {
    id: 5,
    image: CMC,
    title: 'Creamy Milk Candies',
    category: 'Web',
    link: 'https://creamy-milk-candies.vercel.app/',
    desc: 'Site e-commerce de confiseries',
    tech: ['React', 'TailwindCSS'],
  },
  {
    id: 6,
    image: BeePlaceholder,
    title: 'BEE — E-Commerce',
    category: 'App',
    desc: 'Architecture Full-Stack moderne avec API robuste et gestion de base de données MongoDB via Drizzle ORM',
    tech: ['ReactJS', 'NextJS', 'MongoDB', 'Drizzle', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 7,
    image: RememberPlaceholder,
    title: 'RememberMe',
    category: 'App',
    desc: 'Application de rappel et planification des tâches avec authentification JWT et opérations CRUD',
    tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'JWT', 'TailwindCSS'],
  },
  {
    id: 8,
    image: BotPlaceholder,
    title: 'XaufxBot / SynthBot',
    category: 'App',
    desc: 'Robots de trading algorithmique (marché de l\'or & indices) avec dashboard de visualisation',
    tech: ['Python', 'Streamlit', 'Algorithmes'],
  },
];

export const projectsNav = [
  { name: 'Tous' },
  { name: 'Web' },
  { name: 'App' },
];

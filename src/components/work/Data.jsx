import Wiyorent from '../../assets/wiyorent.jpg';
import Hair from '../../assets/braids.jpg';
import Krossty from '../../assets/krossty.jpg';
import Qrcode from '../../assets/qrcode.png';
import CMC from '../../assets/cmc.jpg';
import Fundatrade from '../../assets/fundatrade.png';
import nike from '../../assets/nike.png';
import RememberMe from '../../assets/rememberme.png';
import quotes from '../../assets/quotes.png';
import bee from '../../assets/bee.png';
import portfolio from '../../assets/portfolio.png';
import shop from '../../assets/shop.png';
/* CONSEIL : J'ai placé en haut tous les projets qui possèdent une variable image. 
  Les projets avec "image: null" suivent ensuite.
*/

export const projectsData = [
  // 🖼️ PROJETS AVEC IMAGES (Priorité visuelle)
  {
    id: 1,
    image: Fundatrade,
    title: 'Fundatrade',
    category: 'Web',
    link: 'https://fundatrade.vercel.app/',
    desc: "Plateforme d'analyse fondamentale et technique poussée des marchés financiers tels que XAUUSD et BTCUSD. Avec pour fonctionnalités : suivi en temps réel, graphiques interactifs et Historique de signaux et performances.",
    tech: ['Next.js', 'Recharts', 'TailwindCSS', 'API financières', 'Vercel', 'API Kraken', 'WebSockets'],
  },
  {
    id: 2,
    image: Wiyorent,
    title: 'Wiyorent',
    category: 'Web',
    link: 'https://Wiyorent.vercel.app/',
    desc: 'Plateforme vitrine de location et reservation en ligne — recherche avancée, fiches propriétés et système de réservation.',
    tech: ['React', 'TailwindCSS', 'API Whatsapp', 'Vercel'],
  },
  {
    id: 3,
    image: Hair,
    title: 'Irene Hair Braids',
    category: 'Web',
    link: 'https://irene-hair-braids.vercel.app/',
    desc: 'Site de prise de rendez-vous pour coiffure — design moderne avec contact.',
    tech: ['React', 'TailwindCSS', 'Vercel'],
  },
  {
    id: 4,
    image: Krossty,
    title: 'Krossty',
    category: 'Web',
    link: 'https://krossty-chips.com/',
    desc: 'Site web de vente de chips — vitrine produits, panier et interface utilisateur intuitive avec contact via WhatsApp.',
    tech: ['React', 'TailwindCSS', 'API Whatsapp', 'Vercel'],
  },
  {
    id: 5,
    image: CMC,
    title: 'Creamy Milk Candies',
    category: 'Web',
    link: 'https://creamy-milk-candies.vercel.app/',
    desc: 'Site de vente de bonbons premium — galerie produits et contact via WhatsApp.',
    tech: ['React', 'TailwindCSS', 'API Whatsapp', 'Vercel'],
  },
  {
    id: 6,
    image: Qrcode,
    title: 'QR Studio Ad',
    category: 'Web',
    link: 'https://qrstudio-lovat.vercel.app/',
    desc: 'Générateur & gestionnaire de codes QR — création et tracking d\'accès.',
    tech: ['React', 'Node.js', 'React QR Code', 'Vercel'],
  },

  // 🌑 PROJETS SANS IMAGES (Placeholders)
  {
    id: 7,
    image: null,
    title: 'SYNFxBot',
    category: 'Bot',
    link: 'https://github.com/Nagoloum/SYNFxBot',
    desc: "Bot de trading automatisé pour les indices synthétiques. Stratégie de confirmation de structure pour trader les mouvements explosifs avec gestion de risque avancée.",
    tech: ['Python', 'MetaTrader5', 'MongoDB', 'Streamlit', 'pandas', 'Telegram API'],
  },
  {
    id: 8,
    image: null,
    title: 'XAUFxBot',
    category: 'Bot',
    link: 'https://github.com/Nagoloum/XAUFxBot',
    desc: 'Bot de trading automatisé spécialisé dans le trading de l\'Or (XAU/USD) sur MetaTrader 5. Stratégie optimisée pour les mouvements de l\'or avec analyse de volatilité et gestion de risque sécurisée avec analyse fondamentale et technique.',
    tech: ['Python', 'MetaTrader5', 'MongoDB', 'Streamlit', 'pandas', 'Telegram API'],
  },
  {
    id: 9,
    image: nike,
    title: 'Nike Shop (copy)',
    category: 'Web',
    link: null,
    desc: 'Plateforme e-commerce Nike-style — catalogue produits dynamique. Avec filtre avancé, fiches produits détaillées et système de panier. (Projet en cours de développement)',
    tech: ['Next.js', 'TypeScript', 'React', 'PostgreSQL(Neon)', 'Zustand', 'Devin Ai', 'TurboPack', 'Vercel', 'TailwindCSS', 'betterauth', 'drizzle-orm'],
  },
  {
    id: 10,
    image: bee,
    title: 'Bee',
    category: 'Web',
    link: null,
    desc: 'Plateforme e-commerce Market place — intégration Paiement, sms, email, gestion des utilisateurs, vendeurs et livreurs; gestion des wallets, escrow et commandes (livraisons).',
    tech: ['Next.js', 'TypeScript', 'UploadThing', 'Vercel', 'TailwindCSS', 'Stripe', 'DevCode SMS API', 'Resend', 'Drizzle ORM', 'PostgreSQL(Neon)', 'Zustand', 'Betterauth', 'Pusher', 'Mobile Money API'],
  },
  {
    id: 11,
    image: null,
    title: 'Task App',
    category: 'App',
    link: null,
    desc: 'Clone Wunderlist/Google Tasks — Angular 18 frontend, NestJS backend.',
    tech: ['Angular 18', 'NestJS', 'MongoDB'],
  },
  {
    id: 12,
    image: null,
    title: 'Shadow Escape',
    category: 'Game',
    link: null,
    desc: 'Jeu 3D avec moteur shader avancé — mécaniques de furtivité.',
    tech: ['ShaderLab', 'Unity', 'C#'],
  },
  {
    id: 13,
    image: null,
    title: 'Gestion Déchets',
    category: 'App',
    link: null,
    desc: 'Application de gestion des déchets — suivi collecte.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 14,
    image: null,
    title: 'Gestion Tickets Bus',
    category: 'App',
    link: null,
    desc: 'Système de réservation de tickets — suivi trajets.',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 15,
    image: portfolio,
    title: 'Mon Portfolio Personnel',
    category: 'Web',
    link: null,
    desc: 'Portfolio personnel avec showcase de projets, envoi de mail, témoignages et blog.',
    tech: ['React', 'JavaScript', 'TailwindCSS', 'Vercel', 'Framer Motion', 'GSAP', 'Three.js', 'EmailJS'],
  },
  {
    id: 16,
    image: quotes,
    title: 'Quotes',
    category: 'Web',
    link: 'https://projet-citations-dusky.vercel.app/',
    desc: 'Générateur de citations aléatoires sans API pour l\'instant mais en développement.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 18,
    image: RememberMe,
    title: 'RememberMe',
    category: 'Web',
    link: 'https://rememberme-lemon-chi.vercel.app/',
    desc: 'Application permettant aux utilisateurs de gérer et conserver et planifier leurs tâches, avec authentification JWT, gestion des utilisateurs et stockage sécurisé des données. API backend robuste — endpoints RESTful.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel', 'React', 'TailwindCSS', 'Axios', 'bcrypt','cors', 'dotenv', 'jest', 'supertest', 'Mongoose'],
  },
  {
    id: 19,
    image: null,
    title: 'Feedback',
    category: 'App',
    link: null,
    desc: 'Système de collecte de retours utilisateurs et analytics.',
    tech: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 20,
    image: shop,
    title: 'Shop App',
    category: 'Web',
    link: null,
    desc: 'Mini application de e-commerce avec microservices backend et frontend Vue.js.',
    tech: ['Java', 'Spring Boot', 'Vue.js'],
  },
];

export const projectsNav = [
  { name: 'Tous' },
  { name: 'Web' },
  { name: 'App' },
  { name: 'Bot' },
  { name: 'Game' },
];
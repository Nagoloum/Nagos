import React from 'react';
import Work from '../components/work/Work';
import usePageMeta from '../hooks/usePageMeta';

const PortfolioPage = () => {
  usePageMeta({
    title: 'Projets - Daniel Nagoloum Talla | Portfolio Full-Stack',
    description: 'Projets Full-Stack, Front-End, Data & IA et mobile de Daniel Nagoloum Talla : Allibuy, Zolya, Cyna, Fundatrade, NexaGold et plus, avec stack, statut et liens GitHub.',
    path: '/portfolio',
  });
  return (
    <div className="page">
      <Work />
    </div>
  );
};

export default PortfolioPage;

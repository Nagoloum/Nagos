import React from 'react';
import Blog from '../components/blog/Blog';
import usePageMeta from '../hooks/usePageMeta';

const BlogPage = () => {
  usePageMeta({
    title: 'Blog — Daniel Nagoloum Talla | Retours d’expérience tech',
    description: 'Articles de Daniel Nagoloum Talla : stage chez DATALIA, architecture de NexaGold et Allibuy, authentification JWT, trading algorithmique et outils IA pour développeurs.',
    path: '/blog',
  });
  return (
    <div className="page">
      <Blog />
    </div>
  );
};

export default BlogPage;

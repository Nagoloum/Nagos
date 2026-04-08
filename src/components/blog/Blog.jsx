import React, { useState } from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    category: 'Projet',
    date: 'Janvier 2025',
    readTime: '5 min',
    title: 'BEE — Construire un E-Commerce Full Stack from scratch',
    excerpt: 'Comment j\'ai conçu une architecture Full Stack moderne pour BEE, une application e-commerce avec ReactJS, NextJS, MongoDB et Drizzle ORM. Les défis rencontrés, les décisions techniques et les leçons apprises.',
    tags: ['ReactJS', 'NextJS', 'MongoDB', 'TypeScript'],
    icon: 'uil-shopping-cart-alt',
    color: '#D4FF1E',
    content: `
      Construire BEE a été une aventure intense. L'objectif : une plateforme e-commerce complète, scalable, avec une DX agréable.

      **Stack choisie :** ReactJS + NextJS pour le frontend (SSR/SSG natif), MongoDB + Drizzle ORM pour la couche données, TypeScript pour la sécurité du typage.

      **Défi n°1 — Le typage strict avec Drizzle + MongoDB**
      Drizzle est typiquement utilisé avec SQL. L'adapter à MongoDB tout en conservant la validation TypeScript a demandé une configuration personnalisée des schémas.

      **Défi n°2 — Le panier temps réel**
      J'ai opté pour un state global Zustand plutôt que Context API pour éviter les re-renders inutiles. Couplé à localStorage pour la persistance, le panier survit aux rechargements.

      **Leçon principale :** Une bonne modélisation des données dès le départ évite les migrations douloureuses plus tard.
    `,
  },
  {
    id: 2,
    category: 'Technique',
    date: 'Novembre 2024',
    readTime: '4 min',
    title: 'RememberMe — Authentification JWT et sécurité des APIs REST',
    excerpt: 'Retour d\'expérience sur la mise en place d\'une authentification sécurisée avec JWT dans une application de gestion de tâches. Refresh tokens, middleware Express et bonnes pratiques.',
    tags: ['NodeJS', 'ExpressJS', 'JWT', 'MongoDB'],
    icon: 'uil-lock-alt',
    color: '#6C63FF',
    content: `
      RememberMe est une app de rappels et de gestion de tâches. Derrière sa simplicité apparente se cache une couche d'authentification robuste.

      **Architecture JWT choisie :**
      - Access token (15 min) + Refresh token (7 jours)
      - Stockage du refresh token en httpOnly cookie
      - Middleware Express de validation sur toutes les routes protégées

      **CRUD sécurisé :** Chaque tâche est liée à un userId. Impossible d'accéder aux tâches d'un autre utilisateur, même avec un token valide.

      **Ce que j'aurais fait différemment :** Utiliser Prisma au lieu d'un ODM custom pour MongoDB — la DX est bien meilleure.
    `,
  },
  {
    id: 3,
    category: 'Algorithme',
    date: 'Octobre 2024',
    readTime: '7 min',
    title: 'XaufxBot — Trading algorithmique sur le marché de l\'or en Python',
    excerpt: 'Comment j\'ai développé un robot de trading automatisé pour le marché XAU/USD. Analyse technique, gestion du risque, backtesting et visualisation des données avec Streamlit.',
    tags: ['Python', 'Streamlit', 'Algorithme', 'Data'],
    icon: 'uil-chart-line',
    color: '#FFB347',
    content: `
      Le trading algorithmique m'a toujours fasciné. XaufxBot est né de cette curiosité : un bot Python qui trade l'or (XAU/USD) de manière autonome.

      **Les piliers du système :**
      1. **Signal engine** — Croisements de moyennes mobiles (EMA 9/21) + RSI comme filtre
      2. **Risk management** — Chaque trade respecte un risk/reward minimal de 1:2
      3. **Dashboard Streamlit** — Visualisation des trades en temps réel, PnL, courbe de capital

      **Le plus grand apprentissage :** Un système rentable en backtest peut être catastrophique en live si on ignore le slippage et les frais. Le vrai ennemi du trader algorithmique, c'est l'over-fitting.

      **Résultat :** Le bot tourne de manière semi-automatique avec une supervision quotidienne.
    `,
  },
  {
    id: 4,
    category: 'Parcours',
    date: 'Septembre 2024',
    readTime: '3 min',
    title: 'Shadow Escape — Créer un jeu vidéo d\'infiltration en C# avec Unity',
    excerpt: 'Retour sur le développement de Shadow Escape, un jeu d\'infiltration 2D avec Unity. Cônes de vision, IA ennemie, ShaderLab et les galères de game design.',
    tags: ['Unity', 'C#', 'ShaderLab', 'Game Dev'],
    icon: 'uil-game-structure',
    color: '#FF6B6B',
    content: `
      Développer un jeu vidéo, même petit, est un exercice complet de programmation orientée objet.

      **La mécanique star : les cônes de vision**
      Chaque ennemi possède un champ de vision trigonométrique. Si le joueur entre dans ce cône ET n'est pas derrière un obstacle (Raycast), l'alarme se déclenche. Implémenter ce système m'a appris les maths vectorielles de façon très concrète.

      **ShaderLab pour les effets d'ombre**
      Les zones d'ombre ne sont pas juste cosmétiques — elles définissent les zones sûres. J'ai créé un shader custom pour le rendu des ombres dynamiques.

      **Ce que le game dev apprend au dev web :** La gestion d'état complexe, les boucles d'update performantes, et surtout... l'importance des tests utilisateurs !
    `,
  },
  {
    id: 5,
    category: 'Astuce',
    date: 'Août 2024',
    readTime: '2 min',
    title: 'Mes 5 outils IA préférés pour coder plus vite',
    excerpt: 'Claude, Gemini, GROK — comment j\'intègre les assistants IA dans mon workflow quotidien pour l\'optimisation de code, le refactoring et la résolution de bugs complexes.',
    tags: ['IA', 'Productivité', 'Workflow'],
    icon: 'uil-robot',
    color: '#4ECDC4',
    content: `
      L'IA ne remplace pas le développeur — elle l'amplifie. Voici mon workflow.

      **1. Claude (Anthropic)** — Pour les explications, refactoring et architecture. Excellent pour comprendre du code legacy.

      **2. GROK** — Pour les questions techniques rapides et la recherche de patterns.

      **3. Gemini** — Intégré à l'IDE, pratique pour la complétion de code contextuelle.

      **Règle d'or :** Ne jamais copier-coller de l'IA sans comprendre. Chaque ligne doit être lue, testée et comprise. L'IA génère, toi tu valides.

      **Ce que l'IA ne remplace pas :** La capacité à poser les bonnes questions, à architecturer une solution et à débugguer intelligemment.
    `,
  },
];

const CATEGORIES = ['Tous', 'Projet', 'Technique', 'Algorithme', 'Parcours', 'Astuce'];

const BlogCard = ({ post, onClick }) => (
  <article className="blog__card reveal-scale" onClick={() => onClick(post)}>
    <div className="blog__card-header" style={{ '--post-color': post.color }}>
      <span className="blog__card-category">{post.category}</span>
      <i className={`uil ${post.icon} blog__card-icon`} />
    </div>

    <div className="blog__card-body">
      <div className="blog__card-meta">
        <span><i className="uil uil-calendar-alt" /> {post.date}</span>
        <span><i className="uil uil-clock" /> {post.readTime} de lecture</span>
      </div>
      <h3 className="blog__card-title">{post.title}</h3>
      <p className="blog__card-excerpt">{post.excerpt}</p>

      <div className="blog__card-tags">
        {post.tags.map(tag => (
          <span key={tag} className="blog__tag">{tag}</span>
        ))}
      </div>

      <button className="blog__read-btn">
        Lire l'article <i className="uil uil-arrow-right" />
      </button>
    </div>
  </article>
);

const BlogModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="blog__modal-overlay" onClick={onClose}>
      <div className="blog__modal" onClick={e => e.stopPropagation()}>
        <button className="blog__modal-close" onClick={onClose} aria-label="Fermer">
          <i className="uil uil-times" />
        </button>

        <div className="blog__modal-header" style={{ '--post-color': post.color }}>
          <span className="blog__card-category">{post.category}</span>
          <i className={`uil ${post.icon} blog__modal-icon`} />
        </div>

        <div className="blog__modal-body">
          <div className="blog__card-meta">
            <span><i className="uil uil-calendar-alt" /> {post.date}</span>
            <span><i className="uil uil-clock" /> {post.readTime} de lecture</span>
          </div>
          <h2 className="blog__modal-title">{post.title}</h2>
          <div className="blog__card-tags" style={{ marginBottom: '1.5rem' }}>
            {post.tags.map(tag => (
              <span key={tag} className="blog__tag">{tag}</span>
            ))}
          </div>
          <div className="blog__modal-content">
            {post.content.trim().split('\n\n').map((para, i) => (
              <p key={i} className="blog__modal-para">
                {para.startsWith('**') ? (
                  <strong>{para.replace(/\*\*/g, '')}</strong>
                ) : para.startsWith('      **') ? (
                  <strong>{para.trim().replace(/\*\*/g, '')}</strong>
                ) : (
                  para.trim()
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedPost, setSelectedPost]     = useState(null);

  const filtered = activeCategory === 'Tous'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <section className="blog section" id="blog">
      <span className="section__subtitle">Aventures & Apprentissages</span>
      <h2 className="section__title reveal">Mon Blog</h2>

      {/* Category filter */}
      <div className="blog__filters reveal d1">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`blog__filter-btn${activeCategory === cat ? ' blog__filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="blog__grid container">
        {filtered.map(post => (
          <BlogCard key={post.id} post={post} onClick={setSelectedPost} />
        ))}
      </div>

      {/* CTA */}
      <div className="blog__cta reveal d3">
        <p className="blog__cta-text">
          Tu as une question, un projet ou tu veux échanger sur la tech ?
        </p>
        <a href="#contact" className="button button--accent button--flex">
          Me contacter <i className="uil uil-message button__icon" />
        </a>
      </div>

      {/* Modal */}
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default Blog;

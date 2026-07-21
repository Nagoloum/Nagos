import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    id: 6,
    category: 'Parcours',
    date: 'Juillet 2026',
    readTime: '4 min',
    title: 'Retour sur mon stage de développeur front-end chez DATALIA',
    excerpt: 'Trois mois sur la plateforme immobilière KILICASA : composants réutilisables, intégration d\'API, correction d\'anomalies responsive et travail en équipe avec Git.',
    tags: ['Stage', 'Front-End', 'Git', 'KILICASA'],
    icon: 'uil-briefcase-alt',
    color: '#2563EB',
    paragraphs: [
      'D\'avril à juin 2026, j\'ai effectué un stage de trois mois comme développeur front-end chez DATALIA, sur la plateforme immobilière KILICASA. Premier vrai contact avec le rythme d\'une équipe produit.',
      '**Mes missions :** développer et intégrer des interfaces web responsives, créer et améliorer des composants réutilisables, corriger des anomalies d\'affichage et intégrer des données via API.',
      '**Le travail en équipe :** branches Git, revues de code et retours de l\'équipe technique. On code différemment quand quelqu\'un d\'autre lit chaque ligne — plus simple, plus lisible, plus cohérent avec l\'existant.',
      '**Ce que le stage m\'a appris :** livrer des interfaces soignées dans un cadre professionnel, tenir compte des retours utilisateurs, et découper mon travail en petites étapes vérifiables.',
      '**La suite :** je cherche une alternance full-stack dès septembre 2026 pour continuer à apprendre en équipe, en préparant un Mastère Développement Full-Stack à INGETIS.',
    ],
  },
  {
    id: 7,
    category: 'Projet',
    date: 'Juillet 2026',
    readTime: '6 min',
    title: 'NexaGold — architecturer une plateforme de trading pilotée par IA',
    excerpt: 'Trois applications, un monorepo : dashboard Next.js, API NestJS et moteur de décision Python/FastAPI connecté à un broker. Mes choix techniques et leurs raisons.',
    tags: ['Python', 'FastAPI', 'LightGBM', 'NestJS'],
    icon: 'uil-chart-growth',
    color: '#D8B35A',
    paragraphs: [
      'NexaGold est la suite logique de XAUFxBot et Fundatrade : une plateforme complète de trading algorithmique sur l\'or (XAU/USD), pilotée par IA. Trois applications dans un monorepo : un dashboard Next.js, une API NestJS (utilisateurs, JWT, notifications, WebSockets) et un moteur Python/FastAPI qui enchaîne données → stratégie → risque → exécution.',
      '**Choisir le broker par l\'API :** j\'ai retenu un broker à API REST pure — aucune application tierce à faire tourner, authentification par clé, prix en streaming et compte démo identique au réel. Un choix d\'architecture avant d\'être un choix de trading.',
      '**Du gradient boosting avant le deep learning :** côté modèles, je démarre avec scikit-learn et LightGBM, mesurables et rapides à entraîner. Le deep learning viendra après validation du pipeline de backtesting — construit sur un historique de bougies profond.',
      '**La sécurité d\'abord :** le moteur ne peut envoyer aucun ordre tant que le kill switch n\'est pas explicitement levé (désactivé par défaut). Les identifiants du broker vivent dans l\'environnement, jamais dans le code.',
      '**Leçon principale :** séparer données, stratégie, risque et exécution rend chaque brique testable indépendamment — et un système de trading, ça se teste avant de trader.',
    ],
  },
  {
    id: 1,
    category: 'Projet',
    date: 'Janvier 2025 · maj 2026',
    readTime: '5 min',
    title: 'Allibuy — Construire une marketplace e-commerce full-stack',
    excerpt: 'De la première version Next.js à un monorepo web, mobile et API : l\'évolution d\'Allibuy, ma marketplace multi-vendeurs internationale, et les leçons apprises en route.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    icon: 'uil-shopping-cart-alt',
    color: '#7B61FF',
    paragraphs: [
      'Allibuy est mon projet le plus ambitieux : une marketplace e-commerce multi-vendeurs internationale. Parti d\'une première version Next.js + PostgreSQL (Drizzle ORM), le projet a évolué vers un monorepo complet : web Next.js 15, application mobile Expo / React Native et API NestJS.',
      '**Stack actuelle :** NestJS 10 + Prisma 6 + PostgreSQL 16, Redis + BullMQ pour les files de tâches, Meilisearch pour la recherche, Socket.io pour le temps réel — le tout orchestré en Docker sur une infrastructure volontairement minimaliste.',
      '**Défi n°1 — La sécurité des données :** row-level security PostgreSQL, triggers et rôles applicatifs séparés. La base ne fait confiance à personne, pas même à l\'API.',
      '**Défi n°2 — L\'international :** multi-devises (XAF / EUR / USD), numéros de téléphone internationaux et paiements mobile money — des contraintes qui touchent chaque couche, du schéma de données à l\'interface.',
      '**Leçon principale :** un monorepo avec des types et validateurs partagés (Zod) évite toute divergence entre le web, le mobile et l\'API. Et une bonne modélisation des données dès le départ évite les migrations douloureuses.',
    ],
  },
  {
    id: 2,
    category: 'Technique',
    date: 'Novembre 2024',
    readTime: '4 min',
    title: 'RememberMe — Authentification JWT et sécurité des APIs REST',
    excerpt: 'Retour d\'expérience sur la mise en place d\'une authentification sécurisée avec JWT. Refresh tokens, middleware Express et bonnes pratiques de sécurité.',
    tags: ['NodeJS', 'ExpressJS', 'JWT', 'MongoDB'],
    icon: 'uil-lock-alt',
    color: '#F59E0B',
    paragraphs: [
      'RememberMe est une app de rappels et de gestion de tâches. Derrière sa simplicité apparente se cache une couche d\'authentification robuste.',
      '**Architecture JWT choisie :** Access token (15 min) + Refresh token (7 jours), stockage du refresh token en httpOnly cookie, middleware Express de validation sur toutes les routes protégées.',
      '**CRUD sécurisé :** Chaque tâche est liée à un userId. Impossible d\'accéder aux tâches d\'un autre utilisateur, même avec un token valide.',
      '**Ce que j\'aurais fait différemment :** Utiliser Prisma au lieu d\'un ODM custom pour MongoDB — la DX est bien meilleure et le typage automatique.',
    ],
  },
  {
    id: 3,
    category: 'Algorithme',
    date: 'Octobre 2024',
    readTime: '7 min',
    title: 'XAUFxBot — Trading algorithmique sur le marché de l\'or',
    excerpt: 'Comment j\'ai développé un robot de trading automatisé pour le marché XAU/USD. Analyse technique, gestion du risque et visualisation avec Streamlit.',
    tags: ['Python', 'Streamlit', 'Algorithme', 'Data'],
    icon: 'uil-chart-line',
    color: '#10B981',
    paragraphs: [
      'Le trading algorithmique m\'a toujours fasciné. XaufxBot est né de cette curiosité : un bot Python qui trade l\'or (XAU/USD) de manière autonome.',
      '**Les piliers du système :** Signal engine basé sur les croisements de moyennes mobiles (EMA 9/21) + RSI comme filtre de tendance.',
      '**Risk management :** Chaque trade respecte un risk/reward minimal de 1:2. Le bot ne prend jamais plus de 1% de risque par position.',
      '**Dashboard Streamlit :** Visualisation des trades en temps réel, PnL, courbe de capital et statistiques de performance.',
      '**Le plus grand apprentissage :** Un système rentable en backtest peut être catastrophique en live si on ignore le slippage et les frais. L\'over-fitting est l\'ennemi numéro un.',
    ],
  },
  {
    id: 4,
    category: 'Parcours',
    date: 'Septembre 2024',
    readTime: '3 min',
    title: 'Shadow Escape — Créer un jeu vidéo d\'infiltration avec Unity',
    excerpt: 'Retour sur le développement de Shadow Escape, un jeu d\'infiltration 2D avec Unity. Cônes de vision, IA ennemie et ShaderLab.',
    tags: ['Unity', 'C#', 'ShaderLab', 'Game Dev'],
    icon: 'uil-game-structure',
    color: '#EF4444',
    paragraphs: [
      'Développer un jeu vidéo, même petit, est un exercice complet de programmation orientée objet.',
      '**La mécanique star — les cônes de vision :** Chaque ennemi possède un champ de vision trigonométrique. Si le joueur entre dans ce cône ET n\'est pas derrière un obstacle (Raycast), l\'alarme se déclenche.',
      '**ShaderLab pour les effets d\'ombre :** Les zones d\'ombre ne sont pas juste cosmétiques — elles définissent les zones sûres. J\'ai créé un shader custom pour le rendu des ombres dynamiques.',
      '**Ce que le game dev apprend au dev web :** La gestion d\'état complexe, les boucles d\'update performantes, et l\'importance cruciale des tests utilisateurs.',
    ],
  },
  {
    id: 5,
    category: 'Astuce',
    date: 'Août 2024',
    readTime: '2 min',
    title: 'Mes outils IA préférés pour coder plus vite au quotidien',
    excerpt: 'Claude Code, Gemini, GROK — comment j\'intègre les assistants IA dans mon workflow quotidien pour l\'optimisation de code, le refactoring et la résolution de bugs complexes.',
    tags: ['IA', 'Claude Code', 'Productivité', 'Workflow'],
    icon: 'uil-robot',
    color: '#8B5CF6',
    paragraphs: [
      'L\'IA ne remplace pas le développeur — elle l\'amplifie. Voici mon workflow quotidien.',
      '**1. Claude Code (Anthropic) :** l\'agent en ligne de commande que j\'utilise pour les tâches multi-fichiers : refactoring, génération de documentation, compréhension de code existant. C\'est l\'outil qui a le plus changé ma façon de travailler.',
      '**2. GROK :** Pour les questions techniques rapides et la recherche de patterns dans du code complexe.',
      '**3. Gemini :** Intégré à l\'IDE pour la complétion contextuelle et la génération de tests unitaires.',
      '**Règle d\'or :** Ne jamais copier-coller de l\'IA sans comprendre. L\'IA génère, toi tu valides, tu adaptes, tu testes. C\'est le contrat.',
    ],
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
        <span><i className="uil uil-clock" /> {post.readTime}</span>
      </div>
      <h3 className="blog__card-title">{post.title}</h3>
      <p className="blog__card-excerpt">{post.excerpt}</p>
      <div className="blog__card-tags">
        {post.tags.map(tag => <span key={tag} className="blog__tag">{tag}</span>)}
      </div>
      <button className="blog__read-btn">Lire l'article <i className="uil uil-arrow-right" /></button>
    </div>
  </article>
);

const BlogModal = ({ post, onClose }) => {
  useEffect(() => {
    if (!post) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [post, onClose]);

  if (!post) return null;

  return createPortal(
    <div className="blog__modal-overlay" onClick={onClose}>
      <div className="blog__modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="blog__modal-close"
          onClick={onClose}
          aria-label="Fermer"
        >
          <i className="uil uil-times" />
        </button>

        <div className="blog__modal-header" style={{ '--post-color': post.color }}>
          <span className="blog__card-category">{post.category}</span>
          <i className={`uil ${post.icon} blog__modal-icon`} />
        </div>

        <div className="blog__modal-body">
          <div className="blog__card-meta">
            <span><i className="uil uil-calendar-alt" /> {post.date}</span>
            <span><i className="uil uil-clock" /> {post.readTime}</span>
          </div>
          <h2 className="blog__modal-title">{post.title}</h2>
          <div className="blog__card-tags" style={{ marginBottom: '1.75rem' }}>
            {post.tags.map(tag => <span key={tag} className="blog__tag">{tag}</span>)}
          </div>
          <div className="blog__modal-content">
            {post.paragraphs.map((para, i) => (
              <p key={i} className="blog__modal-para">
                {para.includes('**') ? (
                  <>
                    <strong>{para.split('**')[1]}</strong>
                    {para.split('**')[2] || ''}
                  </>
                ) : para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
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

      <div className="blog__filters reveal d1">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            type="button"
            className={`blog__filter-btn${activeCategory === cat ? ' blog__filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog__grid container">
        {filtered.map(post => (
          <BlogCard key={post.id} post={post} onClick={setSelectedPost} />
        ))}
      </div>

      <div className="blog__cta reveal d3">
        <p className="blog__cta-text">Tu as une question, un projet ou tu veux échanger sur la tech ?</p>
        <Link to="/contact" className="button button--accent button--flex">
          Me contacter <i className="uil uil-message button__icon" />
        </Link>
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default Blog;

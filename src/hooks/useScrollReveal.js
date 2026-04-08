import { useEffect } from 'react';

/**
 * Observes all .reveal, .reveal-left, .reveal-right, .reveal-scale elements
 * and adds the .revealed class when they enter the viewport.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const attach = () => {
      document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
    };

    attach();

    // Re-run if DOM mutates (e.g. swiper slides rendered late)
    const mutation = new MutationObserver(attach);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
};

export default useScrollReveal;

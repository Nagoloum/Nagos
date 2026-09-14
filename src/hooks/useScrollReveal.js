import { useEffect } from 'react';
const useScrollReveal = () => {
  useEffect(() => {
    const selectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale']
      .map(s => `${s}:not(.revealed)`).join(', ');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const attach = () => document.querySelectorAll(selectors).forEach(el => observer.observe(el));
    attach();
    const mutation = new MutationObserver(attach);
    mutation.observe(document.body, { childList:true, subtree:true });
    return () => { observer.disconnect(); mutation.disconnect(); };
  }, []);
};
export default useScrollReveal;

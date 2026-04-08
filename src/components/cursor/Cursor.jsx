import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.classList.add('cursor--hover');
      ring.classList.add('cursor--hover');
    };
    const onLeaveLink = () => {
      dot.classList.remove('cursor--hover');
      ring.classList.remove('cursor--hover');
    };

    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"], .work__item, .services__button, .qualification__button')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnterLink);
          el.addEventListener('mouseleave', onLeaveLink);
        });
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);
    attachHover();

    // Re-attach after possible DOM changes
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor__dot"  ref={dotRef}  />
      <div className="cursor__ring" ref={ringRef} />
    </>
  );
};

export default Cursor;

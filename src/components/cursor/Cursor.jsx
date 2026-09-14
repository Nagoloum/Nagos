import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const INTERACTIVE = 'a,button,[role="button"]';

const Cursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const dot = dotRef.current, ring = ringRef.current;
    if (!dot || !ring) return;
    let mouseX=0, mouseY=0, ringX=0, ringY=0, raf;
    /* Délégation : un seul listener au lieu d'un par lien/bouton */
    const onMove = (e) => {
      mouseX=e.clientX; mouseY=e.clientY;
      dot.style.transform=`translate(${mouseX}px,${mouseY}px)`;
      const hover = !!(e.target instanceof Element && e.target.closest(INTERACTIVE));
      dot.classList.toggle('cursor--hover', hover);
      ring.classList.toggle('cursor--hover', hover);
    };
    const animate = () => { ringX+=(mouseX-ringX)*0.12; ringY+=(mouseY-ringY)*0.12; ring.style.transform=`translate(${ringX}px,${ringY}px)`; raf=requestAnimationFrame(animate); };
    document.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => { document.removeEventListener('mousemove',onMove); cancelAnimationFrame(raf); };
  }, []);
  return (<><div className="cursor__dot" ref={dotRef} /><div className="cursor__ring" ref={ringRef} /></>);
};
export default Cursor;

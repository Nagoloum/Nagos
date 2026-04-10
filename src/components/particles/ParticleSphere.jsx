import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import './ParticleSphere.css';

/* ─── Paramètres physiques ───────────────────────────────── */
const COUNT            = 9000;   // nombre de particules
const RADIUS           = 1.0;    // rayon de la sphère (unités Three.js)
const REPULSION_RADIUS = 1.8;    // zone d'influence du curseur
const REPULSION_FORCE  = 0.22;   // intensité de la répulsion
const SPRING_STRENGTH  = 0.018;  // force de rappel vers la position de repos
const DAMPING          = 0.86;   // amortissement (< 1 = énergie perdue → oscillation)
const DRIFT_AMP        = 0.032;  // amplitude de la dérive naturelle sur la surface
const ORBIT_SPEED      = 0.006;  // vitesse d'orbite propre à chaque particule

const ParticleSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let W = el.clientWidth;
    let H = el.clientHeight;

    /* ── Scene / Camera / Renderer ───────────────────────── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* ── Buffers ─────────────────────────────────────────── */
    const origPos    = new Float32Array(COUNT * 3); // positions d'origine (Fibonacci)
    const restPos    = new Float32Array(COUNT * 3); // positions de repos (rotées + dérive)
    const currPos    = new Float32Array(COUNT * 3); // positions courantes
    const vel        = new Float32Array(COUNT * 3); // vitesses
    const col        = new Float32Array(COUNT * 3); // couleurs
    const driftPhase = new Float32Array(COUNT);     // phase aléatoire par particule
    const orbitDir   = new Float32Array(COUNT);     // sens d'orbite (+1 ou -1)

    const cA = new THREE.Color('#7B61FF');
    const cB = new THREE.Color('#c084fc');

    for (let i = 0; i < COUNT; i++) {
      /* Distribution Fibonacci – répartition uniforme parfaite */
      const phi   = Math.acos(1 - (2 * (i + 0.5)) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = RADIUS * Math.cos(phi);

      origPos[i*3]   = currPos[i*3]   = restPos[i*3]   = x;
      origPos[i*3+1] = currPos[i*3+1] = restPos[i*3+1] = y;
      origPos[i*3+2] = currPos[i*3+2] = restPos[i*3+2] = z;

      driftPhase[i] = Math.random() * Math.PI * 2;
      orbitDir[i]   = Math.random() > 0.5 ? 1 : -1;

      /* Gradient violet → mauve selon Y */
      const t = (y + RADIUS) / (2 * RADIUS);
      const c = cA.clone().lerp(cB, t);
      col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
    }

    const geo    = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(currPos, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);
    geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    /* Le mesh ne tourne PAS – on applique la rotation aux positions manuellement
       → l'espace local = l'espace world → la souris 3D est directement comparable */
    const mesh = new THREE.Points(geo, mat);
    scene.add(mesh);

    /* ── Entrée GSAP ─────────────────────────────────────── */
    mesh.scale.setScalar(0);
    gsap.to(mesh.scale, {
      x: 1, y: 1, z: 1,
      duration: 2.4,
      ease: 'elastic.out(1, 0.4)',
      delay: 0.3,
    });

    /* ── Suivi souris ────────────────────────────────────── */
    /* BUG CORRIGÉ : coordonnées relatives au canvas, pas à la fenêtre */
    const mouse = { ndcX: 0, ndcY: 0, smoothX: 0, smoothY: 0 };
    const mouse3D = { x: 9999, y: 9999, z: 9999, active: false };

    const toNDC = (clientX, clientY) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.ndcX = ((clientX - rect.left) / rect.width)  *  2 - 1;
      mouse.ndcY = ((clientY - rect.top)  / rect.height) * -2 + 1;
    };

    const handleMouseMove  = (e) => { toNDC(e.clientX, e.clientY); mouse3D.active = true; };
    const handleMouseLeave = ()  => { mouse3D.active = false; mouse3D.x = 9999; };
    const handleTouch      = (e) => {
      const t = e.touches[0];
      toNDC(t.clientX, t.clientY);
      mouse3D.active = true;
    };

    /* Écoute sur window pour capter la souris même hors canvas */
    window.addEventListener('mousemove',  handleMouseMove);
    el.addEventListener('mouseleave',    handleMouseLeave);
    window.addEventListener('touchmove', handleTouch, { passive: true });

    /* ── Outils Three.js (réutilisés sans allocation dans la boucle) ── */
    const raycaster = new THREE.Raycaster();
    const mouseVec  = new THREE.Vector2();
    const quatY     = new THREE.Quaternion();
    const quatX     = new THREE.Quaternion();
    const quat      = new THREE.Quaternion();
    const axisY     = new THREE.Vector3(0, 1, 0);
    const axisX     = new THREE.Vector3(1, 0, 0);
    const rotMat    = new THREE.Matrix4();

    /* Éléments de la matrice de rotation (mis à jour 1×/frame, utilisés dans la boucle) */
    let m00=1,m01=0,m02=0, m10=0,m11=1,m12=0, m20=0,m21=0,m22=1;

    /* ── Boucle d'animation ──────────────────────────────── */
    const clock = new THREE.Clock();
    let raf;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const elapsed = clock.getElapsedTime();

      /* ① Lissage souris pour la rotation */
      mouse.smoothX += (mouse.ndcX - mouse.smoothX) * 0.055;
      mouse.smoothY += (mouse.ndcY - mouse.smoothY) * 0.055;

      /* ② Calcul du quaternion de rotation global */
      const angleY = elapsed * 0.10 + mouse.smoothX * 0.55;
      const angleX = mouse.smoothY * 0.28;
      quatY.setFromAxisAngle(axisY, angleY);
      quatX.setFromAxisAngle(axisX, angleX);
      quat.copy(quatY).multiply(quatX);

      /* ③ Extraction des éléments de la matrice (évite new Matrix4 dans la boucle) */
      rotMat.makeRotationFromQuaternion(quat);
      const me = rotMat.elements;
      m00=me[0]; m10=me[1]; m20=me[2];
      m01=me[4]; m11=me[5]; m21=me[6];
      m02=me[8]; m12=me[9]; m22=me[10];

      /* ④ Position 3D de la souris via intersection ray–sphère (r = RADIUS * 2.5)
            AUCUNE transformation de mesh n'est nécessaire car mesh.rotation = 0 */
      if (mouse3D.active) {
        mouseVec.set(mouse.ndcX, mouse.ndcY);
        raycaster.setFromCamera(mouseVec, camera);
        const ro  = raycaster.ray.origin;
        const rd  = raycaster.ray.direction;
        const R   = RADIUS * 2.5;
        const b   =  2 * (ro.x*rd.x + ro.y*rd.y + ro.z*rd.z);
        const ccc = ro.x*ro.x + ro.y*ro.y + ro.z*ro.z - R*R;
        const disc = b*b - 4*ccc;

        if (disc >= 0) {
          const t  = (-b - Math.sqrt(disc)) * 0.5;
          mouse3D.x = ro.x + rd.x * t;
          mouse3D.y = ro.y + rd.y * t;
          mouse3D.z = ro.z + rd.z * t;
        } else {
          /* Rayon tangent : point le plus proche de l'origine */
          const t  = -(ro.x*rd.x + ro.y*rd.y + ro.z*rd.z);
          mouse3D.x = ro.x + rd.x * t;
          mouse3D.y = ro.y + rd.y * t;
          mouse3D.z = ro.z + rd.z * t;
        }
      }

      /* ⑤ Physique par particule ─────────────────────────── */
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;

        /* a) Rotation de la position d'origine (matrice précompilée) */
        const ox = origPos[i3], oy = origPos[i3+1], oz = origPos[i3+2];
        let rx = m00*ox + m01*oy + m02*oz;
        let ry = m10*ox + m11*oy + m12*oz;
        let rz = m20*ox + m21*oy + m22*oz;

        /* b) Dérive naturelle oscillatoire sur la surface */
        const dp = driftPhase[i];
        const t  = elapsed;
        rx += Math.sin(t * 0.55 + dp)        * DRIFT_AMP;
        ry += Math.cos(t * 0.47 + dp * 1.31) * DRIFT_AMP;
        rz += Math.sin(t * 0.72 + dp * 0.79) * DRIFT_AMP;

        /* c) Orbite propre à chaque particule (dérive tangentielle autour de Y) */
        const nLen = Math.sqrt(rx*rx + rz*rz);
        if (nLen > 0.0001) {
          const orbitAngle = elapsed * ORBIT_SPEED * orbitDir[i] + dp;
          rx += (-rz / nLen) * Math.sin(orbitAngle) * 0.04;
          rz += ( rx / nLen) * Math.sin(orbitAngle) * 0.04;
        }

        /* d) Re-projection sur la surface de la sphère */
        const sLen = Math.sqrt(rx*rx + ry*ry + rz*rz);
        const inv  = RADIUS / sLen;
        rx *= inv; ry *= inv; rz *= inv;

        restPos[i3] = rx; restPos[i3+1] = ry; restPos[i3+2] = rz;

        const cx = currPos[i3], cy = currPos[i3+1], cz = currPos[i3+2];

        /* e) Répulsion du curseur */
        const dxm = cx - mouse3D.x;
        const dym = cy - mouse3D.y;
        const dzm = cz - mouse3D.z;
        const dm  = Math.sqrt(dxm*dxm + dym*dym + dzm*dzm);

        if (dm < REPULSION_RADIUS && dm > 0.0001) {
          const factor = Math.pow((REPULSION_RADIUS - dm) / REPULSION_RADIUS, 1.3);
          const s = factor * REPULSION_FORCE;
          vel[i3]   += (dxm / dm) * s;
          vel[i3+1] += (dym / dm) * s;
          vel[i3+2] += (dzm / dm) * s;
        }

        /* f) Rappel élastique vers la position de repos */
        vel[i3]   += (rx - cx) * SPRING_STRENGTH;
        vel[i3+1] += (ry - cy) * SPRING_STRENGTH;
        vel[i3+2] += (rz - cz) * SPRING_STRENGTH;

        /* g) Amortissement */
        vel[i3]   *= DAMPING;
        vel[i3+1] *= DAMPING;
        vel[i3+2] *= DAMPING;

        /* h) Intégration Euler */
        currPos[i3]   += vel[i3];
        currPos[i3+1] += vel[i3+1];
        currPos[i3+2] += vel[i3+2];
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };
    tick();

    /* ── Resize ──────────────────────────────────────────── */
    const onResize = () => {
      if (!el) return;
      W = el.clientWidth; H = el.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener('resize', onResize);

    /* ── Cleanup ─────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove',  handleMouseMove);
      window.removeEventListener('touchmove',  handleTouch);
      window.removeEventListener('resize',     onResize);
      el.removeEventListener('mouseleave',     handleMouseLeave);
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="particle-sphere" />;
};

export default ParticleSphere;

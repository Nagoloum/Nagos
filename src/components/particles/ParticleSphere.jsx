import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import './ParticleSphere.css';

/* ─── Paramètres ─────────────────────────────────────────── */
const COUNT            = 8000;   // particules
const RADIUS           = 1.55;   // rayon de la sphère (plus grande)
const REPULSION_RADIUS = 2.2;    // zone d'influence du curseur (grande)
const REPULSION_FORCE  = 0.55;   // poussée très forte → trou bien visible
const SPRING_STRENGTH  = 0.014;  // rappel doux → retour lent et fluide
const DAMPING          = 0.82;   // amortissement → oscillations naturelles
const DRIFT_AMP        = 0.018;  // micro-dérive sur la surface

const ParticleSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let W = el.clientWidth;
    let H = el.clientHeight;

    /* ── Scene / Camera / Renderer ── */
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 4.2;   // reculé → sphère plus grande à l'écran

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* ── Buffers ── */
    const origPos    = new Float32Array(COUNT * 3);
    const currPos    = new Float32Array(COUNT * 3);
    const vel        = new Float32Array(COUNT * 3);
    const col        = new Float32Array(COUNT * 3);
    const driftPhase = new Float32Array(COUNT);

    const cA = new THREE.Color('#7B61FF');
    const cB = new THREE.Color('#c084fc');

    for (let i = 0; i < COUNT; i++) {
      /* Fibonacci sphere – distribution uniforme */
      const phi   = Math.acos(1 - (2 * (i + 0.5)) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = RADIUS * Math.cos(phi);

      origPos[i*3]   = currPos[i*3]   = x;
      origPos[i*3+1] = currPos[i*3+1] = y;
      origPos[i*3+2] = currPos[i*3+2] = z;
      driftPhase[i]  = Math.random() * Math.PI * 2;

      const t = (y + RADIUS) / (2 * RADIUS);
      const c = cA.clone().lerp(cB, t);
      col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
    }

    const geo     = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(currPos, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);
    geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      sizeAttenuation: true,
    });

    const mesh = new THREE.Points(geo, mat);
    scene.add(mesh);

    /* ── Entrée GSAP ── */
    mesh.scale.setScalar(0);
    gsap.to(mesh.scale, {
      x: 1, y: 1, z: 1,
      duration: 2.4,
      ease: 'elastic.out(1, 0.4)',
      delay: 0.3,
    });

    /* ── Souris ── */
    const mouse   = { ndcX: 0, ndcY: 0, smoothX: 0, smoothY: 0 };
    const mouse3D = { x: 99999, y: 99999, z: 99999, active: false };

    const toNDC = (cx, cy) => {
      const rect   = renderer.domElement.getBoundingClientRect();
      mouse.ndcX   = ((cx - rect.left) / rect.width)  *  2 - 1;
      mouse.ndcY   = ((cy - rect.top)  / rect.height) * -2 + 1;
    };

    const onMove  = (e) => { toNDC(e.clientX, e.clientY); mouse3D.active = true; };
    const onLeave = ()  => { mouse3D.active = false; mouse3D.x = 99999; };
    const onTouch = (e) => { const t = e.touches[0]; toNDC(t.clientX, t.clientY); mouse3D.active = true; };

    window.addEventListener('mousemove',  onMove);
    el.addEventListener('mouseleave',     onLeave);
    window.addEventListener('touchmove',  onTouch, { passive: true });

    /* ── Outils Three.js ── */
    const raycaster = new THREE.Raycaster();
    const mouseVec  = new THREE.Vector2();
    const quatY     = new THREE.Quaternion();
    const quatX     = new THREE.Quaternion();
    const quat      = new THREE.Quaternion();
    const axisY     = new THREE.Vector3(0, 1, 0);
    const axisX     = new THREE.Vector3(1, 0, 0);
    const rotMat    = new THREE.Matrix4();
    let m00=1,m01=0,m02=0,m10=0,m11=1,m12=0,m20=0,m21=0,m22=1;

    /* ── Boucle ── */
    const clock = new THREE.Clock();
    let raf;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const elapsed = clock.getElapsedTime();

      /* Lissage souris → rotation */
      mouse.smoothX += (mouse.ndcX - mouse.smoothX) * 0.05;
      mouse.smoothY += (mouse.ndcY - mouse.smoothY) * 0.05;

      /* Quaternion de rotation global */
      quatY.setFromAxisAngle(axisY, elapsed * 0.08 + mouse.smoothX * 0.5);
      quatX.setFromAxisAngle(axisX, mouse.smoothY * 0.25);
      quat.copy(quatY).multiply(quatX);
      rotMat.makeRotationFromQuaternion(quat);
      const me = rotMat.elements;
      m00=me[0]; m10=me[1]; m20=me[2];
      m01=me[4]; m11=me[5]; m21=me[6];
      m02=me[8]; m12=me[9]; m22=me[10];

      /* Position 3D de la souris (intersection ray–sphère élargie) */
      if (mouse3D.active) {
        mouseVec.set(mouse.ndcX, mouse.ndcY);
        raycaster.setFromCamera(mouseVec, camera);
        const ro  = raycaster.ray.origin;
        const rd  = raycaster.ray.direction;
        const R   = RADIUS * 2.0;                        // sphère de projection
        const b   = 2 * (ro.x*rd.x + ro.y*rd.y + ro.z*rd.z);
        const ccc = ro.x*ro.x + ro.y*ro.y + ro.z*ro.z - R*R;
        const disc = b*b - 4*ccc;
        const t   = disc >= 0
          ? (-b - Math.sqrt(disc)) * 0.5
          : -(ro.x*rd.x + ro.y*rd.y + ro.z*rd.z);       // point le plus proche
        mouse3D.x = ro.x + rd.x * t;
        mouse3D.y = ro.y + rd.y * t;
        mouse3D.z = ro.z + rd.z * t;
      }

      /* ── Physique par particule ── */
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;

        /* a) Rotation + dérive douce de la position cible */
        const ox = origPos[i3], oy = origPos[i3+1], oz = origPos[i3+2];
        let rx = m00*ox + m01*oy + m02*oz;
        let ry = m10*ox + m11*oy + m12*oz;
        let rz = m20*ox + m21*oy + m22*oz;

        const dp = driftPhase[i];
        rx += Math.sin(elapsed * 0.45 + dp)        * DRIFT_AMP;
        ry += Math.cos(elapsed * 0.38 + dp * 1.27) * DRIFT_AMP;
        rz += Math.sin(elapsed * 0.61 + dp * 0.83) * DRIFT_AMP;

        /* Re-projection sur la surface */
        const sLen = Math.sqrt(rx*rx + ry*ry + rz*rz);
        rx = rx / sLen * RADIUS;
        ry = ry / sLen * RADIUS;
        rz = rz / sLen * RADIUS;

        const cx = currPos[i3], cy = currPos[i3+1], cz = currPos[i3+2];

        /* b) Répulsion curseur – force quadratique très marquée */
        const dxm = cx - mouse3D.x;
        const dym = cy - mouse3D.y;
        const dzm = cz - mouse3D.z;
        const dm  = Math.sqrt(dxm*dxm + dym*dym + dzm*dzm);

        if (dm < REPULSION_RADIUS && dm > 0.0001) {
          /* Puissance 2 → fort au centre, s'atténue progressivement vers le bord */
          const factor = Math.pow((REPULSION_RADIUS - dm) / REPULSION_RADIUS, 2.0);
          const s = factor * REPULSION_FORCE;
          vel[i3]   += (dxm / dm) * s;
          vel[i3+1] += (dym / dm) * s;
          vel[i3+2] += (dzm / dm) * s;
        }

        /* c) Rappel élastique vers repos */
        vel[i3]   += (rx - cx) * SPRING_STRENGTH;
        vel[i3+1] += (ry - cy) * SPRING_STRENGTH;
        vel[i3+2] += (rz - cz) * SPRING_STRENGTH;

        /* d) Amortissement */
        vel[i3]   *= DAMPING;
        vel[i3+1] *= DAMPING;
        vel[i3+2] *= DAMPING;

        /* e) Intégration */
        currPos[i3]   += vel[i3];
        currPos[i3+1] += vel[i3+1];
        currPos[i3+2] += vel[i3+2];
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };
    tick();

    /* ── Resize ── */
    const onResize = () => {
      if (!el) return;
      W = el.clientWidth; H = el.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('touchmove',  onTouch);
      window.removeEventListener('resize',     onResize);
      el.removeEventListener('mouseleave',     onLeave);
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="particle-sphere" />;
};

export default ParticleSphere;

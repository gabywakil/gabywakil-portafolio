import { useEffect } from 'react';

// Qué elementos aparecen con el scroll (el hero se queda con su animación de carga)
const SELECTOR = [
  'section:not(.hero2) :is(h2,h3,p,li,.tag,.script,.tagline,.ficha,.num,.seal,.pol,.ph,.card,.blk,.pill,.btn,blockquote,cite)',
  'main .mq',
  'main .belt',
].join(',');
const ZOOM = '.ph,.card,.blk,.pol,.seal,.num'; // entran con zoom
const SIDE = 'p,li,.tagline,.ficha,blockquote'; // entran por los lados, alternando
const CLASSES = ['reveal', 'is-visible', 'from-left', 'from-right', 'zoom'];

export default function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const found = [...document.querySelectorAll(SELECTOR)];
    const set = new Set(found);
    // si un elemento está dentro de otro que ya aparece, no se anima por separado
    const els = found.filter((el) => {
      for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
      return true;
    });

    const timers = [];
    const siblings = new Map();
    let side = 0;
    root.classList.add('js-reveal');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          el.classList.add('is-visible');
          // al terminar, el elemento vuelve a su CSS normal (hover, etc.)
          timers.push(setTimeout(() => el.classList.remove(...CLASSES), 1700));
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    els.forEach((el) => {
      const k = siblings.get(el.parentElement) || 0;
      siblings.set(el.parentElement, k + 1);
      el.style.setProperty('--d', `${Math.min(k, 5) * 0.09}s`); // escalonado
      el.classList.add('reveal');
      if (el.matches(ZOOM)) el.classList.add('zoom');
      else if (el.matches(SIDE)) el.classList.add(side++ % 2 ? 'from-left' : 'from-right');
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      root.classList.remove('js-reveal');
      els.forEach((el) => { el.classList.remove(...CLASSES); el.style.removeProperty('--d'); });
    };
  }, []);
}

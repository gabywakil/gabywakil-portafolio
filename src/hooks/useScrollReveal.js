import { useEffect } from 'react';

// Aparición suave al hacer scroll: cada bloque sube un poco y se desvanece una sola vez.
// El hero se queda con su propia animación de carga.
const SELECTOR = [
  'section:not(.hero2) :is(h2,.tag,.num,.tagline,.txt,.ficha,.roadmap,.card,.pol,.blk,.grid,.carw,.split,.social,.pindex,.mail-cta,.contact-photo,.script,.btn,ul,p)',
].join(',');

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
    root.classList.add('js-reveal');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          el.classList.add('is-visible');
          // al terminar, el elemento vuelve a su CSS normal (hover, etc.)
          timers.push(setTimeout(() => el.classList.remove('reveal', 'is-visible'), 1200));
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    els.forEach((el) => {
      const k = siblings.get(el.parentElement) || 0;
      siblings.set(el.parentElement, k + 1);
      el.style.setProperty('--d', `${Math.min(k, 4) * 0.06}s`); // escalonado corto
      el.classList.add('reveal');
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      root.classList.remove('js-reveal');
      els.forEach((el) => { el.classList.remove('reveal', 'is-visible'); el.style.removeProperty('--d'); });
    };
  }, []);
}

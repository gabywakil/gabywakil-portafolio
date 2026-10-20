import { useEffect, useRef } from 'react';

// Círculo "Ver" que sigue al cursor sobre las imágenes ampliables (solo con mouse).
export default function CursorLabel() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || still) return;
    const el = ref.current;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;

    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const on = !!e.target.closest?.('[data-zoom]');
      el.classList.toggle('on', on);
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => el.classList.remove('on');
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cur-lbl" aria-hidden="true"><span>Ver</span></div>;
}

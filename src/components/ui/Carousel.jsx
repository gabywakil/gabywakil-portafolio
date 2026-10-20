import { useEffect, useRef, useState } from 'react';

// Carrusel horizontal con scroll-snap, flechas y barra de progreso.
export default function Carousel({ label, children }) {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setP(max > 0 ? el.scrollLeft / max : 0);
      setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { el.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const move = (d) => {
    const el = ref.current;
    el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="carw">
      <div className="car" ref={ref} tabIndex={0} aria-label={label}>{children}</div>
      <div className="car-ctrl">
        <div className="car-bar" aria-hidden="true"><i style={{ width: `${Math.max(12, p * 100)}%` }} /></div>
        <button type="button" onClick={() => move(-1)} disabled={edge.start} aria-label="Anterior">←</button>
        <button type="button" onClick={() => move(1)} disabled={edge.end} aria-label="Siguiente">→</button>
      </div>
    </div>
  );
}

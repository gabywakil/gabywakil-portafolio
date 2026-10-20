import { useEffect, useState } from 'react';

// Botón flotante para volver arriba; aparece después de bajar un poco.
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#inicio" className={`totop${show ? ' show' : ''}`} aria-label="Volver arriba">↑</a>
  );
}

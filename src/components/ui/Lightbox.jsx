import { useCallback, useEffect, useState } from 'react';

// Visor a pantalla completa para cualquier imagen con [data-zoom].
// Agrupa las imágenes del mismo proyecto (o sección) para navegar con flechas.
export default function Lightbox() {
  const [state, setState] = useState(null); // { items:[{src,alt}], i }

  const open = useCallback((fig) => {
    const scope = fig.closest('.proj') || fig.closest('section') || document.body;
    const figs = [...scope.querySelectorAll('[data-zoom]')];
    const items = figs.map((f) => {
      const im = f.querySelector('img');
      return { src: im.currentSrc || im.src, alt: im.alt };
    });
    setState({ items, i: Math.max(0, figs.indexOf(fig)) });
  }, []);

  // abrir con clic o Enter/Espacio
  useEffect(() => {
    const onClick = (e) => {
      const fig = e.target.closest('[data-zoom]');
      if (fig) open(fig);
    };
    const onKey = (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches?.('[data-zoom]')) {
        e.preventDefault();
        open(e.target);
      }
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setState(null);
  const go = useCallback((d) => setState((s) => s && { ...s, i: (s.i + d + s.items.length) % s.items.length }), []);

  // teclado dentro del visor + bloquear scroll
  useEffect(() => {
    if (!state) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [state, go]);

  if (!state) return null;
  const { items, i } = state;
  const cur = items[i];
  const many = items.length > 1;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={cur.alt} onClick={close}>
      <button className="lb-x" onClick={close} aria-label="Cerrar">✕</button>
      {many && (
        <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Anterior">←</button>
      )}
      <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
        <img key={cur.src} src={cur.src} alt={cur.alt} />
        <figcaption>
          <span>{cur.alt}</span>
          {many && <span className="lb-count">{String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>}
        </figcaption>
      </figure>
      {many && (
        <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Siguiente">→</button>
      )}
    </div>
  );
}

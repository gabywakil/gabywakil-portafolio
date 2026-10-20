import { useEffect, useRef, useState } from 'react';
import { projects } from '../../data/projects';

// Índice editorial de proyectos. En escritorio muestra una vista previa que sigue al cursor.
export default function ProjectIndex() {
  const [hover, setHover] = useState(null);
  const prev = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    const list = listRef.current;
    const el = prev.current;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => {
      const r = list.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!raf) { x = tx; y = ty; raf = requestAnimationFrame(loop); }
    };
    const onLeave = () => { cancelAnimationFrame(raf); raf = 0; };
    list.addEventListener('pointermove', onMove);
    list.addEventListener('pointerleave', onLeave);
    return () => {
      list.removeEventListener('pointermove', onMove);
      list.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="pindex" aria-label="Índice de proyectos">
      <div className="pindex-head">
        <span>N.º</span>
        <span>Proyecto</span>
        <span className="hide-sm">Disciplina</span>
      </div>
      <div ref={listRef} className="pi-list" onPointerLeave={() => setHover(null)}>
      <ol>
        {projects.map((p) => (
          <li key={p.id}>
            <a href={`#p-${p.id}`} onPointerEnter={() => setHover(p.id)} onFocus={() => setHover(p.id)} onBlur={() => setHover(null)}>
              <span className="pi-num">{p.num}</span>
              <span className="pi-name">{p.name}</span>
              <span className="pi-type">{p.type}</span>
              <span className="pi-arrow" aria-hidden="true">↘</span>
            </a>
          </li>
        ))}
      </ol>
        <div ref={prev} className={`pi-prev${hover ? ' on' : ''}`} aria-hidden="true">
          {projects.map((p) => (
            <img key={p.id} src={p.thumb} alt="" className={hover === p.id ? 'on' : ''} loading="lazy" />
          ))}
        </div>
      </div>
    </nav>
  );
}

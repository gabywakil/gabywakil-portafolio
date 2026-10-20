import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'sobre', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // resalta la sección visible
  useEffect(() => {
    const secs = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    secs.forEach((s) => io.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  // cerrar menú con Escape
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open]);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`} aria-label="Principal">
      <a className="logo" href="#inicio" onClick={() => setOpen(false)}>Gaby W.</a>
      <ul id="menu">
        {LINKS.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} aria-current={active === l.id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a className="btn" href="#contacto" onClick={() => setOpen(false)}>Hablemos</a>
      <button className="burger" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </nav>
  );
}

import { useId, useRef, useState } from 'react';

// Pestañas accesibles (flechas izquierda/derecha para moverse entre ellas).
// tabs = [{ id, label, content }]
export default function Tabs({ tabs, label }) {
  const [active, setActive] = useState(tabs[0].id);
  const uid = useId();
  const refs = useRef({});

  const onKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[n].id);
    refs.current[tabs[n].id]?.focus();
  };

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[t.id] = el)}
            role="tab"
            type="button"
            id={`${uid}-t-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`${uid}-p-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className={active === t.id ? 'on' : ''}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${uid}-p-${t.id}`}
          aria-labelledby={`${uid}-t-${t.id}`}
          hidden={active !== t.id}
          className="tab-panel"
        >
          {active === t.id && t.content}
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import Ph from '../ui/Ph';
import Sticker from '../ui/Sticker';
import { img } from '../../utils/img';

const EMAIL = 'gabiwakil@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="contact darker" id="contacto">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dp" style={{ left: "2%", bottom: "8%", "--sz": "110px" }} />
        <Sticker kind="ch" style={{ right: "3%", top: "12%", "--sz": "110px" }} />
      </div>
      <div className="mq dk" aria-hidden="true" style={{ margin: "-4rem -5vw 0" }}>
        <div className="track">
          <span>{"¡HABLEMOS! ✦ ¡HABLEMOS! ✦ ¡HABLEMOS! ✦ "}</span>
          <span>{"¡HABLEMOS! ✦ ¡HABLEMOS! ✦ ¡HABLEMOS! ✦ "}</span>
        </div>
      </div>
      <div className="wrap">
        <div>
          <span className="tag">05 — Contacto</span>
          <h2>
            {"Gracias por tu "}
            <em>tiempo</em>
          </h2>
          <p className="lead">Si te gusta mi trabajo y crees que puedo aportar a tu equipo, ¡me encantaría conectar!</p>

          <div className="mail-cta">
            <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}<span aria-hidden="true">↗</span></a>
            <button type="button" className="copy" onClick={copy} aria-live="polite">
              {copied ? 'Copiado ✓' : 'Copiar email'}
            </button>
          </div>

          <ul className="links">
            <li>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/gabriella-wakil-665a733b5" target="_blank" rel="noopener">Gabriella Wakil ↗</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href="https://www.instagram.com/gw.studios_" target="_blank" rel="noopener">@gw.studios_ ↗</a>
            </li>
            <li>
              <span>Ubicación</span>
              <b>Bogotá, Colombia</b>
            </li>
          </ul>
          <p className="script" style={{ marginTop: "1.8rem" }}>¡Hablemos!</p>
        </div>
        <div className="contact-photo">
          <Ph label="Retrato de Gabriella Wakil" src={img('gaby/retrato.jpg')} className="arch portrait" pos="center 20%" />
          <span className="photo-tag">GW Studios · by Gabriella Wakil</span>
        </div>
      </div>
    </section>
  );
}

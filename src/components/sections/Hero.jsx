import Ph from '../ui/Ph';
import Sticker from '../ui/Sticker';
import { img } from '../../utils/img';

export default function Hero() {
  return (
    <section className="hero2 dark" id="inicio">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dc" style={{ right: "4%", top: "14%", "--sz": "120px" }} />
        <Sticker kind="ch" style={{ left: "3%", top: "13%", "--sz": "100px" }} />
      </div>
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-top">
          <span className="tag">UX/UI &amp; PRODUCT DESIGN PORTFOLIO</span>
          <span className="status"><i aria-hidden="true" />Disponible para proyectos</span>
        </div>
        <h1 aria-label="Gabriella Wakil">
          <span style={{ "--i": "1" }}>Gabriella</span>
          {" "}
          <em>
            <span style={{ "--i": "2" }}>Wakil</span>
          </em>
        </h1>
        <div className="canvas">
          <aside className="win code">
            <div className="bar">
              <i />
              <i />
              <i />
              <span>portfolio.css</span>
            </div>
            <div className="lines">
              <p style={{ "--n": "1", "--w": "7ch" }}>{".gaby {"}</p>
              <p style={{ "--n": "2", "--w": "16ch" }}>{" design: figma;"}</p>
              <p style={{ "--n": "3", "--w": "14ch" }}>{" code: react;"}</p>
              <p style={{ "--n": "4", "--w": "17ch" }}>{" where: \"Bogotá\";"}</p>
              <p style={{ "--n": "5", "--w": "11ch" }}>{" meets: ✦;"}</p>
              <p style={{ "--n": "6", "--w": "1ch" }}>{"}"}</p>
            </div>
          </aside>
          <div className="frame-wrap">
            <span className="lbl">gaby.png</span>
            <span className="dim" aria-hidden="true">380 × 506</span>
            <div className="frame">
              <b className="hd h1" />
              <b className="hd h2" />
              <b className="hd h3" />
              <b className="hd h4" />
              <Ph label="Retrato de Gabriella Wakil" src={img('gaby/retrato.jpg')} className="arch portrait" pos="center 20%" />
            </div>
          </div>
          <aside className="win pal">
            <div className="bar">
              <i />
              <i />
              <i />
              <span>estilos</span>
            </div>
            <div className="sw">
              <i style={{ background: "#0F1E33" }} title="Midnight #0F1E33" />
              <i style={{ background: "#2E4A67" }} title="Cobalt #2E4A67" />
              <i style={{ background: "#B8945B" }} title="Antique Brass #B8945B" />
              <i style={{ background: "#D8CEBE" }} title="Parchment #D8CEBE" />
              <i style={{ background: "#F4F0E8" }} title="Porcelain #F4F0E8" />
            </div>
            <div className="spec">
              <b className="s1">Aa</b>
              <b className="s2">Aa</b>
              <b className="s3">Aa</b>
            </div>
          </aside>
        </div>
        <p className="sub">Estudiante de Ingeniería en Sistemas — Bogotá, Colombia</p>
        <div className="cta">
          <p className="script">Where design meets code</p>
          <div className="cta-btns">
            <a className="btn" href="#proyectos">Ver proyectos</a>
            <a className="btn ghost" href="#contacto">Contactar</a>
          </div>
        </div>
        <ul className="facts" aria-label="En resumen">
          <li><b>09</b><span>proyectos en este portafolio</span></li>
          <li><b>UX/UI</b><span>diseño de producto e interfaces</span></li>
          <li><b>React</b><span>desarrollo front-end</span></li>
          <li><b>BOG</b><span>Bogotá, Colombia</span></li>
        </ul>
      </div>
    </section>
  );
}

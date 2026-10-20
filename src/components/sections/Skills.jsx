import Sticker from '../ui/Sticker';

export default function Skills() {
  return (
    <section className="skills darker" id="habilidades">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dp" style={{ right: "3%", top: "8%", "--sz": "120px" }} />
        <Sticker kind="hr" style={{ left: "3%", bottom: "6%", "--sz": "90px" }} />
      </div>
      <div className="wrap">
        <span className="tag">02 — Habilidades</span>
        <h2 className="rv">
          {"Habilidades y "}
          <em>cualidades</em>
        </h2>
        <div className="grid">
          <article className="card rv">
            <span className="ico" aria-hidden="true">✎</span>
            <h3>Diseño</h3>
            <ul>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Canva</li>
              <li>Base44</li>
              <li>Community Management</li>
            </ul>
          </article>
          <article className="card rv">
            <span className="ico" aria-hidden="true">{"</>"}</span>
            <h3>Desarrollo</h3>
            <ul>
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git / GitHub</li>
              <li>Shopify / Liquid</li>
            </ul>
          </article>
        </div>
        <h3 className="rv">Cualidades</h3>
        <div className="rv">
          <span className="pill">Trabajo en equipo</span>
          <span className="pill">Liderazgo</span>
          <span className="pill">Adaptabilidad</span>
          <span className="pill">Comunicación asertiva</span>
          <span className="pill">Pensamiento crítico</span>
          <span className="pill">Resolución de problemas</span>
        </div>
      </div>
    </section>
  );
}

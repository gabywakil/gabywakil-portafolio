import Sticker from '../ui/Sticker';

export default function Skills() {
  return (
    <section className="skills darker" id="habilidades">
      <div className="decor" aria-hidden="true">
        <Sticker kind="hr" anim={3} style={{ left: "3%", top: "5%", "--sz": "90px" }} />
        <Sticker kind="dp" anim={2} style={{ right: "2%", top: "9%", "--sz": "135px" }} />
        <Sticker kind="ch" anim={1} style={{ left: "4%", bottom: "5%", "--sz": "115px" }} />
        <Sticker kind="sp" anim={5} style={{ right: "11%", bottom: "6%", "--sz": "60px" }} />
        <Sticker kind="sr" anim={5} style={{ left: "50%", top: "3%", "--sz": "48px" }} />
        <b className="bdg" style={{ left: "20%", top: "3%" }}>skills</b>
      </div>
      <div className="wrap">
        <h2 className="rv">
          {"Habilidades y "}
          <em>cualidades</em>
        </h2>
        <div className="grid">
          <article className="card light rv" style={{ background: "var(--vino)" }}>
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

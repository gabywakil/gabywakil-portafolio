import Ph from '../ui/Ph';
import Sticker from '../ui/Sticker';

export default function Hero() {
  return (
    <section className="hero2 dark" id="inicio">
      <div className="decor" aria-hidden="true">
        <Sticker kind="hr" anim={3} style={{ left: "2%", top: "16%", "--sz": "80px" }} />
        <Sticker kind="dc" anim={2} style={{ right: "3%", top: "12%", "--sz": "130px" }} />
        <Sticker kind="ch" anim={1} style={{ right: "4%", bottom: "6%", "--sz": "115px" }} />
        <Sticker kind="hp" anim={1} style={{ left: "4%", bottom: "7%", "--sz": "90px" }} />
        <Sticker kind="sp" anim={5} style={{ left: "47%", top: "20%", "--sz": "54px" }} />
        <Sticker kind="sr" anim={5} style={{ left: "42%", bottom: "9%", "--sz": "50px" }} />
      </div>
      <div className="wrap">
        <span className="tag">{"UX/UI & PRODUCT DESIGN PORTFOLIO"}</span>
        <h1 aria-label="Gabriella Wakil">
          <span style={{ "--i": "1" }}>Gabriella</span>
          {" "}
          <em>
            <span style={{ "--i": "2" }}>Wakil</span>
          </em>
        </h1>
        <div className="canvas">
          <aside className="win code" style={{ "--fx": "-90px" }}>
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
            <span className="lbl">retrato</span>
            <div className="frame">
              <b className="hd h1" />
              <b className="hd h2" />
              <b className="hd h3" />
              <b className="hd h4" />
              <Ph label="FOTO: retrato de Gaby" src="" className="arch" />
            </div>
            <span className="arrow" style={{ left: "-4%", top: "24%" }} aria-hidden="true">↘</span>
            <span className="arrow" style={{ right: "-4%", bottom: "22%", rotate: "180deg" }} aria-hidden="true">↘</span>
            <span className="cur c1" aria-hidden="true">Gaby</span>
            <span className="cur c2" aria-hidden="true">código</span>
          </div>
          <aside className="win pal" style={{ "--fx": "90px" }}>
            <div className="bar">
              <i />
              <i />
              <i />
              <span>estilos</span>
            </div>
            <div className="sw">
              <i style={{ background: "#1E100F", "--d": "0.0s" }} title="#1E100F" />
              <i style={{ background: "#F6F3E4", "--d": "0.15s" }} title="#F6F3E4" />
              <i style={{ background: "#30050E", "--d": "0.3s" }} title="#30050E" />
              <i style={{ background: "#4D0C12", "--d": "0.44999999999999996s" }} title="#4D0C12" />
              <i style={{ background: "#7A2118", "--d": "0.6s" }} title="#7A2118" />
              <i style={{ background: "#E9C9C6", "--d": "0.75s" }} title="#E9C9C6" />
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
          <a className="btn" href="#proyectos">Ver proyectos</a>
        </div>
      </div>
    </section>
  );
}

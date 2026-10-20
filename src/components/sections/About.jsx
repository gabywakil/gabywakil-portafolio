import Ph from '../ui/Ph';
import Sticker from '../ui/Sticker';
import { img } from '../../utils/img';

export default function About() {
  return (
    <section className="about light" id="sobre">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dc" style={{ left: "2%", top: "6%", "--sz": "110px" }} />
        <Sticker kind="ch" style={{ right: "3%", bottom: "5%", "--sz": "110px" }} />
      </div>
      <div className="wrap">
        <div className="rv">
          <span className="tag">01 — Sobre mí</span>
          <h2>
            {"Sobre "}
            <em>mí</em>
          </h2>
          <p>Soy estudiante de Ingeniería en Sistemas en la UEB, Bogotá, Colombia. Combino desarrollo front-end (HTML, CSS, JavaScript, React) con diseño (Figma, Illustrator, Photoshop, Canva).</p>
          <p>Me apasiona la intersección entre tecnología y creatividad, y la satisfacción de entregar un producto final y ver la reacción del cliente o usuario.</p>
        </div>
        <div className="pols">
          <div className="pol">
            <Ph label="Gaby" src={img('gaby/selfie.jpg')} pos="center 30%" />
          </div>
          <div className="pol">
            <Ph label="Gaby en Bogotá" src={img('gaby/campus.jpg')} />
          </div>
          <div className="pol">
            <Ph label="Gaby, retrato casual" src={img('gaby/noche.jpg')} pos="center 30%" />
          </div>
        </div>
      </div>
    </section>
  );
}

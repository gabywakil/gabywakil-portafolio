import Ph from '../ui/Ph';
import Sticker from '../ui/Sticker';

export default function About() {
  return (
    <section className="about light" id="sobre">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dc" anim={2} style={{ left: "1%", top: "5%", "--sz": "120px" }} />
        <Sticker kind="ch" anim={1} style={{ right: "2%", bottom: "5%", "--sz": "125px" }} />
        <Sticker kind="hr" anim={3} style={{ right: "5%", top: "6%", "--sz": "85px" }} />
        <Sticker kind="sp" anim={5} style={{ left: "48%", bottom: "4%", "--sz": "56px" }} />
        <Sticker kind="hp" anim={1} style={{ left: "3%", bottom: "6%", "--sz": "80px" }} />
        <b className="bdg" style={{ right: "20%", top: "3%" }}>yo ✿</b>
      </div>
      <div className="wrap">
        <div className="rv">
          <h2>
            {"Sobre "}
            <em>mí</em>
          </h2>
          <p>Soy estudiante de Ingeniería en Sistemas en la UEB, Bogotá, Colombia. Combino desarrollo front-end (HTML, CSS, JavaScript, React) con diseño (Figma, Illustrator, Photoshop, Canva).</p>
          <p>Me apasiona la intersección entre tecnología y creatividad, y la satisfacción de entregar un producto final y ver la reacción del cliente o usuario.</p>
        </div>
        <div className="pols">
          <div className="pol">
            <Ph label="FOTO: Gaby trabajando" src="" />
          </div>
          <div className="pol">
            <Ph label="FOTO: escritorio / proceso" src="" />
          </div>
          <div className="pol">
            <Ph label="FOTO: retrato casual" src="" />
          </div>
          <span className="sp" style={{ right: "0", bottom: "0" }}>✦</span>
        </div>
      </div>
    </section>
  );
}

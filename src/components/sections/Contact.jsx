import Ph from '../ui/Ph';
import Sticker from '../ui/Sticker';

export default function Contact() {
  return (
    <section className="contact darker" id="contacto">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dp" anim={2} style={{ left: "2%", top: "10%", "--sz": "125px" }} />
        <Sticker kind="ch" anim={1} style={{ right: "3%", top: "8%", "--sz": "115px" }} />
        <Sticker kind="hr" anim={3} style={{ left: "3%", bottom: "6%", "--sz": "90px" }} />
        <Sticker kind="dc" anim={2} style={{ right: "3%", bottom: "5%", "--sz": "130px" }} />
        <Sticker kind="sp" anim={5} style={{ left: "48%", bottom: "4%", "--sz": "56px" }} />
        <b className="bdg" style={{ left: "30%", top: "3%" }}>hi!</b>
      </div>
      <div className="mq dk" aria-hidden="true" style={{ margin: "-4rem -5vw 0" }}>
        <div className="track">
          <span>¡HABLEMOS! ✦ ¡HABLEMOS! ✦ ¡HABLEMOS! ✦</span>
          <span>¡HABLEMOS! ✦ ¡HABLEMOS! ✦ ¡HABLEMOS! ✦</span>
        </div>
      </div>
      <div className="wrap">
        <div>
          <h2>
            {"Gracias por tu "}
            <em>tiempo</em>
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>Si te gusta mi trabajo y crees que puedo aportar a tu equipo, ¡me encantaría conectar!</p>
          <ul>
            <li>
              {"Email: "}
              <a href="mailto:gabiwakil@gmail.com">gabiwakil@gmail.com</a>
            </li>
            <li>
              {"LinkedIn: "}
              <a href="https://www.linkedin.com/in/gabriella-wakil-665a733b5" target="_blank" rel="noopener">linkedin.com/in/gabriella-wakil-665a733b5</a>
            </li>
            <li>Instagram: @gw.studios_</li>
            <li>Ubicación: Bogotá, Colombia</li>
          </ul>
          <p className="script" style={{ marginTop: "1.5rem" }}>¡Hablemos!</p>
        </div>
        <Ph label="FOTO: retrato de cierre" src="" className="arch" />
      </div>
    </section>
  );
}

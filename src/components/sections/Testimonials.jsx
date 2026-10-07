import Sticker from '../ui/Sticker';

export default function Testimonials() {
  return (
    <section className="testi light">
      <div className="decor" aria-hidden="true">
        <Sticker kind="hr" anim={3} style={{ left: "2%", top: "8%", "--sz": "95px" }} />
        <Sticker kind="ch" anim={1} style={{ right: "2%", top: "10%", "--sz": "120px" }} />
        <Sticker kind="dc" anim={2} style={{ left: "3%", bottom: "6%", "--sz": "120px" }} />
        <Sticker kind="hp" anim={1} style={{ right: "3%", bottom: "8%", "--sz": "90px" }} />
        <Sticker kind="sp" anim={5} style={{ left: "48%", top: "3%", "--sz": "54px" }} />
        <b className="bdg" style={{ right: "22%", top: "3%" }}>wow</b>
      </div>
      <div className="wrap">
        <span className="tag">LO QUE DICEN DE MI TRABAJO</span>
        <h2 className="rv">
          {"Lo que dicen de mi "}
          <em>trabajo</em>
        </h2>
        <div className="grid">
          <figure className="card rv">
            <span className="qm" aria-hidden="true">“</span>
            <blockquote>Trabajar con ella para mi página web fue un alivio total. Captó la estética y la esencia de Conmariabonita desde el día uno, me la entregó bellísima y súper rápido. Lo que más me encanta es que es hiper fácil de manejar y editar. ¡De verdad 10/10, un trabajo impecable y con un gusto increíble!.</blockquote>
            <figcaption>
              <cite>— Maria Mardeni, Comariabonita</cite>
            </figcaption>
          </figure>
          <figure className="card rv">
            <span className="qm" aria-hidden="true">“</span>
            <blockquote>Montar la plataforma para Tepuy Race era todo un reto por la cantidad de detalles, pero ella voló. Se encargó de crear una página bellísima, funcional y súper intuitiva para que la gente navegue e inscriba sin enredos. Trabaja increíblemente rápido y resuelve todo al instante. ¡La recomiendo con los ojos cerrados!!!!!!</blockquote>
            <figcaption>
              <cite>— Jorge Salloum, TepuyRace</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

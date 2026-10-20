import Sticker from '../ui/Sticker';

export default function Testimonials() {
  return (
    <section className="testi light">
      <div className="decor" aria-hidden="true">
        <Sticker kind="hr" style={{ left: "3%", top: "8%", "--sz": "90px" }} />
        <Sticker kind="dc" style={{ right: "3%", bottom: "8%", "--sz": "110px" }} />
      </div>
      <div className="wrap">
        <span className="tag">04 — Testimonios</span>
        <h2 className="rv">
          {"Lo que dicen de mi "}
          <em>trabajo</em>
        </h2>
        <div className="grid">
          <figure className="card rv">
            <span className="qm" aria-hidden="true">“</span>
            <blockquote>Trabajar con ella para mi página web fue un alivio total. Captó la estética y la esencia de Conmariabonita desde el día uno, me la entregó bellísima y súper rápido. Lo que más me encanta es que es hiper fácil de manejar y editar. ¡De verdad 10/10, un trabajo impecable y con un gusto increíble!.</blockquote>
            <figcaption className="who">
              <span className="av" aria-hidden="true">MM</span>
              <cite><b>Maria Mardeni</b>Con María Bonita</cite>
            </figcaption>
          </figure>
          <figure className="card rv">
            <span className="qm" aria-hidden="true">“</span>
            <blockquote>Montar la plataforma para Tepuy Race era todo un reto por la cantidad de detalles, pero ella voló. Se encargó de crear una página bellísima, funcional y súper intuitiva para que la gente navegue e inscriba sin enredos. Trabaja increíblemente rápido y resuelve todo al instante. ¡La recomiendo con los ojos cerrados!!!!!!</blockquote>
            <figcaption className="who">
              <span className="av" aria-hidden="true">JS</span>
              <cite><b>Jorge Salloum</b>Tepuy Race</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectTepuy() {
  return (
    <article className="proj" id="p-tepuy">
      <span className="num">01</span>
      <span className="tag">CASO DE ESTUDIO · FREELANCE</span>
      <h3>
        {"Tepuy "}
        <em>Race</em>
      </h3>
      <span className="tagline">DISEÑO Y DESARROLLO WEB • BROCHURE • REDES</span>
      <p className="txt">Diseño y desarrollo completo de un evento de trail running en Venezuela, hecho en solitario. Un reto nuevo, que me permitió demostrar mi capacidad de gestión, creatividad y disciplina.</p>
      <ol className="roadmap">
        <li>Research</li>
        <li>Prototipos en Stitch</li>
        <li>Diseño visual</li>
        <li>Desarrollo en React</li>
        <li>Ajustes con feedback</li>
      </ol>
      <a className="btn sm" href="https://www.tepuyrace.com" target="_blank" rel="noopener">Visitar sitio ↗</a>
      <div className="grid g6 shots">
        <Ph label="Tepuy Race — Home" src={img('tepuy/home.jpg')} className="round wide" />
        <Ph label="Tepuy Race — La aventura" src={img('tepuy/aventura.jpg')} className="round wide" />
        <Ph label="Tepuy Race — Conectando corredores" src={img('tepuy/comunidad.jpg')} className="round wide" />
        <Ph label="Tepuy Race — Momentos épicos" src={img('tepuy/momentos.jpg')} className="round wide" />
        <Ph label="Tepuy Race — Inscripción" src={img('tepuy/inscripcion.jpg')} className="round wide" />
        <Ph label="Tepuy Race — Premios" src={img('tepuy/premios.jpg')} className="round wide" />
      </div>
    </article>
  );
}

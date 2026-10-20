import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectRedes() {
  return (
    <article className="proj" id="p-redes">
      <span className="num">11</span>
      <span className="tag">DISEÑO PARA REDES SOCIALES</span>
      <h3>
        {"Contenido que "}
        <em>conecta</em>
      </h3>
      <span className="tagline">POSTS · HISTORIAS · CAMPAÑAS</span>
      <p className="txt">Piezas gráficas para Tepuy Race, Fuera de Pauta y otras marcas. Variando estilos y formatos según cada plataforma.</p>
      <div className="social">
        <Ph label="Tepuy Race 2026 — Banner de campaña" src={img('redes/tepuy-banner.jpg')} className="round s-banner" />
        <Ph label="Fuera de Pauta — Post segunda temporada" src={img('redes/fuera-de-pauta.jpg')} className="round s-post" pos="top" />
        <Ph label="Tepuy Race — Kit de inscripción" src={img('redes/tepuy-kit.jpg')} className="round s-post" pos="top" />
        <Ph label="Tepuy Race — Historia carrera 10K" src={img('redes/tepuy-10k.jpg')} className="round s-story" pos="top" />
      </div>
    </article>
  );
}

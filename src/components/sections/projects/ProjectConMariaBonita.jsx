import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectConMariaBonita() {
  return (
    <article className="proj" id="p-conmariabonita">
      <span className="num">08</span>
      <span className="tag">CASO DE ESTUDIO · FREELANCE</span>
      <h3>
        {"Con María "}
        <em>Bonita</em>
      </h3>
      <span className="tagline">IDENTIDAD DE MARCA + SITIO WEB — NUTRICIÓN</span>
      <p className="txt">Diseño de marca y sitio web para una nutricionista, pensado para transmitir cercanía y confianza desde el primer contacto: presentación del servicio, proceso de consulta y agendamiento de citas.</p>
      <div className="ficha">
        <span><b>Rol</b>Diseño + desarrollo</span>
        <span><b>Stack</b>Figma, HTML/CSS</span>
        <span><b>Tipo</b>Freelance</span>
      </div>
      <div className="grid g4">
        <Ph label="Con María Bonita — Inicio" src={img('conmariabonita/inicio.jpg')} className="phone" pos="top" />
        <Ph label="Con María Bonita — Sobre mí" src={img('conmariabonita/sobre-mi.jpg')} className="phone" pos="top" />
        <Ph label="Con María Bonita — Asesoría nutricional" src={img('conmariabonita/asesoria.jpg')} className="phone" pos="top" />
        <Ph label="Con María Bonita — Calculadora nutricional" src={img('conmariabonita/calculadora.jpg')} className="phone" pos="top" />
      </div>
    </article>
  );
}

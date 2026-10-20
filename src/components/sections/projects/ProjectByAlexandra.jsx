import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectByAlexandra() {
  return (
    <article className="proj" id="p-byalexandra">
      <span className="num">07</span>
      <span className="tag">CASO DE ESTUDIO · FREELANCE</span>
      <h3>
        {"By Alexandra "}
        <em>Fernández</em>
      </h3>
      <span className="tagline">MARCA DE ROPA — SITIO WEB</span>
      <p className="txt">Diseño y desarrollo de sitio web para una marca de ropa, con foco en mostrar el catálogo de forma clara y reforzar la identidad visual de la marca en cada página.</p>
      <div className="ficha">
        <span><b>Rol</b>Diseño + desarrollo</span>
        <span><b>Stack</b>HTML/CSS</span>
        <span><b>Tipo</b>Freelance</span>
      </div>
      <div className="grid g4 stagger">
        <Ph label="By Alexandra — Home" src={img('byalexandra/home.jpg')} className="phone" pos="top" />
        <Ph label="By Alexandra — Catálogo" src={img('byalexandra/catalogo.jpg')} className="phone" pos="top" />
        <Ph label="By Alexandra — Nuestra historia" src={img('byalexandra/historia.jpg')} className="phone" pos="top" />
        <Ph label="By Alexandra — Colecciones" src={img('byalexandra/colecciones.jpg')} className="phone" pos="top" />
      </div>
    </article>
  );
}

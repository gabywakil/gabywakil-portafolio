import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

// Para mostrar los posts: guarda las imágenes en public/img/gw-studios/ como post-1.jpg … post-9.jpg
// Mientras no existan, cada espacio muestra su etiqueta.
const POSTS = Array.from({ length: 9 }, (_, i) => i + 1);
const SERVICES = ['Branding e identidad visual', 'Diseño y desarrollo web', 'Diseño para redes sociales', 'Contenido visual con IA'];

export default function ProjectGWStudios() {
  return (
    <article className="proj full gw" id="p-gw-studios">
      <span className="num">10</span>
      <span className="tag">MI ESTUDIO · @GW.STUDIOS_</span>
      <h3>
        {"GW "}
        <em>Studios</em>
      </h3>
      <span className="tagline">ESTUDIO FREELANCE DE DISEÑO Y DESARROLLO WEB</span>
      <div className="gw-wrap">
        <div className="gw-card">
          <img className="gw-logo" src={img('gw-studios/gw-logo.png')} alt="Logo de GW Studios" loading="lazy" />
          <p className="txt">GW Studios es mi estudio de diseño y desarrollo web, firmado como <em>by Gabriella Wakil</em>. Desde ahí acompaño a marcas, eventos y emprendimientos, muchos de ellos entre Venezuela y Colombia, desde la identidad visual hasta el sitio web y el contenido para redes.</p>
          <ul className="gw-services">
            {SERVICES.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <a className="btn" href="https://www.instagram.com/gw.studios_" target="_blank" rel="noopener">Ver en Instagram ↗</a>
        </div>
        <div className="ig">
          <div className="ig-head">
            <img src={img('gw-studios/gw-mark.png')} alt="" aria-hidden="true" />
            <div><b>gw.studios_</b><span>Diseño · Web · Contenido</span></div>
          </div>
          <div className="ig-grid">
            {POSTS.map((n) => (
              <Ph key={n} label={`Post ${n}`} src={img(`gw-studios/post-${n}.jpg`)} alt={`GW Studios — Post ${n}`} className="sq" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

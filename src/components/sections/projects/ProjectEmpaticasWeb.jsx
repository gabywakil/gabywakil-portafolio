import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

const SHOTS = [
  ['creadoras', 'Las creadoras'],
  ['audiencia', 'Nuestra audiencia'],
  ['paquetes', 'Paquetes de patrocinio'],
  ['patrocinio', 'Patrocinante principal'],
  ['media', 'Cobertura media y creadores'],
  ['evento', 'Así se verá el evento'],
];

export default function ProjectEmpaticasWeb() {
  return (
    <article className="proj full" id="p-empaticas-web">
      <span className="num">04</span>
      <span className="tag">CASO DE ESTUDIO · DISEÑO Y DESARROLLO WEB</span>
      <h3>
        {"Empáticas — "}
        <em>Propuesta comercial</em>
      </h3>
      <span className="tagline">PORTAFOLIO WEB DE PATROCINIO · WELLNESS CLUB</span>
      <div className="intro-row">
        <p className="txt">Sitio web que funciona como portafolio comercial para conseguir patrocinantes del Wellness Club de Empáticas en Lechería. Presenta la experiencia, las creadoras, la audiencia y los paquetes de patrocinio con un lenguaje visual propio: toldos, stickers, polaroids y una paleta vino y rosa que lleva la identidad de la marca a cada sección.</p>
        <div className="ficha">
          <span><b>Rol</b>Diseño + desarrollo</span>
          <span><b>Stack</b>HTML, CSS, JavaScript</span>
          <span><b>Tipo</b>Freelance</span>
        </div>
      </div>
      <a className="btn sm" href="https://gabywakil.github.io/portafolio-empaticas/" target="_blank" rel="noopener">Ver sitio en vivo ↗</a>

      <div className="web-show">
        <Ph label="Empáticas — Hero de la propuesta comercial" src={img('empaticas-web/hero.jpg')} className="round wide web-hero" pos="top" />
        <div className="web-phones">
          <Ph label="Empáticas — Versión móvil: inicio" src={img('empaticas-web/m-hero.jpg')} className="phone" pos="top" />
          <Ph label="Empáticas — Versión móvil: creadoras" src={img('empaticas-web/m-creadoras.jpg')} className="phone" pos="top" />
        </div>
      </div>
      <div className="grid g3 shots web-grid">
        {SHOTS.map(([f, l]) => (
          <Ph key={f} label={`Empáticas — ${l}`} src={img(`empaticas-web/${f}.jpg`)} className="round wide" pos="top" />
        ))}
      </div>
    </article>
  );
}

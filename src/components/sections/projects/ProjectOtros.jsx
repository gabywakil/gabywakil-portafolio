import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectOtros() {
  return (
    <article className="proj" id="p-otros">
      <span className="num">12</span>
      <span className="tag">OTROS PROYECTOS</span>
      <h3>
        {"Otros "}
        <em>proyectos</em>
      </h3>
      <span className="tagline">WEB · CARRUSELES · BANNERS</span>
      <div className="grid otros">
        <div className="card">
          <span className="card-kicker">Sitio web</span>
          <h3>Los Sauces Ranch</h3>
          <p className="txt">Caballos Cuarto de Milla · Bienestar · Links</p>
          <Ph label="Los Sauces Ranch — Secciones del sitio" src={img('otros/los-sauces.jpg')} className="round nat" />
        </div>
        <div className="card">
          <span className="card-kicker">Redes</span>
          <h3>Historias de pastelería</h3>
          <p className="txt">Carrusel de historias con logo “G”.</p>
          <Ph label="Pastelería — Carrusel de historias" src={img('otros/pasteleria.jpg')} className="round nat" />
        </div>
        <div className="card wide-card">
          <span className="card-kicker">Banner</span>
          <h3>Fuera de Pauta</h3>
          <p className="txt">Late night show — segunda temporada.</p>
          <Ph label="Fuera de Pauta — Banner segunda temporada" src={img('otros/fuera-de-pauta.jpg')} className="round nat" />
        </div>
      </div>
    </article>
  );
}

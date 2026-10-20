import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectEmpaticas() {
  return (
    <article className="proj" id="p-empaticas">
      <span className="num">03</span>
      <span className="tag">CASO DE ESTUDIO</span>
      <h3>
        Em
        <em>páticas</em>
      </h3>
      <span className="tagline">IDENTIDAD VISUAL DE MARCA + SITIO WEB</span>
      <p className="txt">Desarrollo de identidad visual de marca y sitio web, enfocada en bienestar, eventos y salud mental.</p>
      <div className="split">
        <div className="grid brand-row">
          <Ph label="Empáticas — Logotipo" src={img('empaticas/logo.jpg')} className="round brand-logo" />
          <Ph label="Empáticas — Banner del evento" src={img('empaticas/banner.jpg')} className="round brand-banner" />
        </div>
        <div className="grid g4">
          <Ph label="Empáticas — Inicio" src={img('empaticas/m1.jpg')} className="phone" pos="top" />
          <Ph label="Empáticas — Quiénes somos" src={img('empaticas/m2.jpg')} className="phone" pos="top" />
          <Ph label="Empáticas — El origen" src={img('empaticas/m3.jpg')} className="phone" pos="top" />
          <Ph label="Empáticas — Aliados" src={img('empaticas/m4.jpg')} className="phone" pos="top" />
        </div>
      </div>
    </article>
  );
}

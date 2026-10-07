import Ph from '../../ui/Ph';

export default function ProjectFoodik() {
  return (
    <article className="proj rv">
      <span className="num">02</span>
      <span className="tag">CASO DE ESTUDIO — FIGMA</span>
      <h3>
        Food
        <em>ik</em>
      </h3>
      <span className="tagline">APP MÓVIL PARA RESTAURANTES UNIVERSITARIOS</span>
      <p className="txt">Proyecto académico en equipo. Diseñé el sistema de diseño completo y los flujos multipantalla en Base44 para una app que permite descubrir restaurantes, reservar mesa y dividir la cuenta.</p>
      <div className="car" tabIndex="0" aria-label="Carrusel de pantallas de Foodik">
        <Ph label="MOCKUP: Foodik 1" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 2" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 3" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 4" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 5" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 6" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 7" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 8" src="" className="phone" />
        <Ph label="MOCKUP: Foodik 9" src="" className="phone" />
      </div>
    </article>
  );
}

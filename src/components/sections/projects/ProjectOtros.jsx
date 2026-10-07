import Ph from '../../ui/Ph';

export default function ProjectOtros() {
  return (
    <article className="proj rv">
      <span className="num">09</span>
      <h3>
        {"Otros "}
        <em>proyectos</em>
      </h3>
      <span className="tagline">OTROS PROYECTOS WEB</span>
      <div className="grid otros">
        <div className="card" style={{ background: "var(--rojo-ladrillo)" }}>
          <h3>Los Sauces Ranch</h3>
          <p className="txt">Caballos Cuarto De Milla · Bienestar · Links</p>
          <Ph label="CAPTURA: Los Sauces Ranch" src="" className="round wide" />
        </div>
        <div className="card" style={{ background: "var(--rojo-ladrillo)" }}>
          <h3>Historias de pastelería</h3>
          <p className="txt">Carrusel con logo “G”.</p>
          <Ph label="CARRUSEL: pastelería (logo G)" src="" className="round wide" />
        </div>
        <div className="card" style={{ background: "var(--rojo-ladrillo)" }}>
          <h3>Fuera de Pauta</h3>
          <p className="txt">Segunda temporada.</p>
          <Ph label="BANNER: Fuera de Pauta – Segunda temporada" src="" className="round wide" />
        </div>
      </div>
    </article>
  );
}

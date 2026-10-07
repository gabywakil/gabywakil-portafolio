import Ph from '../../ui/Ph';

export default function ProjectConMariaBonita() {
  return (
    <article className="proj rv">
      <span className="num">06</span>
      <h3>
        {"Con María "}
        <em>Bonita</em>
      </h3>
      <span className="tagline">IDENTIDAD DE MARCA + SITIO WEB — NUTRICIÓN</span>
      <div className="split rev">
        <div>
          <p className="txt">Diseño de marca y sitio web para una nutricionista, pensado para transmitir cercanía y confianza desde el primer contacto: presentación del servicio, proceso de consulta y agendamiento de citas.</p>
          <div className="ficha">
            <span>
              <b>Rol:</b>
              {" Diseño + desarrollo"}
            </span>
            <span>
              <b>Stack:</b>
              {" Figma, HTML/CSS"}
            </span>
            <span>
              <b>Tipo:</b>
              {" Freelance"}
            </span>
          </div>
        </div>
        <div className="grid g4">
          <Ph label="MOCKUP: inicio" src="" className="phone" />
          <Ph label="MOCKUP: servicio" src="" className="phone" />
          <Ph label="MOCKUP: consulta" src="" className="phone" />
          <Ph label="MOCKUP: citas" src="" className="phone" />
        </div>
      </div>
    </article>
  );
}

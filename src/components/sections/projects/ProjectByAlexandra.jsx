import Ph from '../../ui/Ph';

export default function ProjectByAlexandra() {
  return (
    <article className="proj rv">
      <span className="num">07</span>
      <h3>
        {"By Alexandra "}
        <em>Fernández</em>
      </h3>
      <span className="tagline">MARCA DE ROPA — SITIO WEB</span>
      <p className="txt">Diseño y desarrollo de sitio web para una marca de ropa, con foco en mostrar el catálogo de forma clara y reforzar la identidad visual de la marca en cada página.</p>
      <div className="ficha">
        <span>
          <b>Rol:</b>
          {" Diseño + desarrollo"}
        </span>
        <span>
          <b>Stack:</b>
          {" HTML/CSS"}
        </span>
        <span>
          <b>Tipo:</b>
          {" Freelance"}
        </span>
      </div>
      <div className="grid g4">
        <Ph label="MOCKUP: home" src="" className="phone" />
        <Ph label="MOCKUP: catálogo" src="" className="phone" style={{ marginTop: "2rem" }} />
        <Ph label="MOCKUP: producto" src="" className="phone" />
        <Ph label="MOCKUP: marca" src="" className="phone" style={{ marginTop: "2rem" }} />
      </div>
    </article>
  );
}

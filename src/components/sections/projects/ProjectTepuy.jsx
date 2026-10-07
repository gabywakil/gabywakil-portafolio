import Ph from '../../ui/Ph';

export default function ProjectTepuy() {
  return (
    <article className="proj rv">
      <span className="num">01</span>
      <span className="tag">CASO DE ESTUDIO</span>
      <h3>
        {"Tepuy "}
        <em>Race</em>
      </h3>
      <span className="tagline">DISEÑO Y DESARROLLO WEB • BROCHURE • REDES</span>
      <svg className="seal" style={{ right: "0", top: "2rem", color: "var(--rosa-palido)" }} viewBox="0 0 120 120" role="img" aria-label="Proyecto freelance">
        <defs>
          <path id="c" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" />
        <text>
          <textPath href="#c">PROYECTO FREELANCE ✦ PROYECTO FREELANCE ✦</textPath>
        </text>
        <text x="60" y="66" textAnchor="middle" style={{ fontSize: "20px" }}>✦</text>
      </svg>
      <p className="txt">Diseño y desarrollo completo de un evento de trail running en Venezuela, hecho en solitario. Un reto nuevo, que me permitió demostrar mi capacidad de gestión, creatividad y disciplina.</p>
      <ol className="roadmap">
        <li>Research</li>
        <li>Prototipos en Stitch</li>
        <li>Diseño visual</li>
        <li>Desarrollo en React</li>
        <li>Ajustes con feedback</li>
      </ol>
      <div className="grid g6">
        <Ph label="CAPTURA: home de Tepuy Race" src="" className="round wide" />
        <Ph label="CAPTURA: el evento" src="" className="round wide" />
        <Ph label="CAPTURA: recorridos" src="" className="round wide" />
        <Ph label="CAPTURA: inscripción" src="" className="round wide" />
        <Ph label="CAPTURA: patrocinadores" src="" className="round wide" />
        <Ph label="CAPTURA: versión móvil" src="" className="round wide" />
      </div>
    </article>
  );
}

import Ph from '../../ui/Ph';

export default function ProjectMoveSmartTurbo() {
  return (
    <article className="proj rv">
      <span className="num">05</span>
      <h3>
        {"MoveSmart "}
        <em>y</em>
        {" Turbo Wheels"}
      </h3>
      <span className="tagline">PROYECTOS UNIVERSITARIOS</span>
      <div className="duo">
        <div className="blk cr">
          <h3>MoveSmart</h3>
          <p className="txt">Ingeniería de Software II — Front-end y gestión de proyecto</p>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <Ph label="CAPTURA: MoveSmart 1" src="" className="round wide" />
            <Ph label="CAPTURA: MoveSmart 2" src="" className="round wide" />
          </div>
        </div>
        <div className="blk vi">
          <h3>Turbo Wheels</h3>
          <p className="txt">Bases de Datos II — Front-end</p>
          <div className="grid g3">
            <Ph label="CAPTURA 1" src="" className="round" style={{ aspectRatio: "3/4" }} />
            <Ph label="CAPTURA 2" src="" className="round" style={{ aspectRatio: "3/4" }} />
            <Ph label="CAPTURA 3" src="" className="round" style={{ aspectRatio: "3/4" }} />
          </div>
        </div>
      </div>
    </article>
  );
}

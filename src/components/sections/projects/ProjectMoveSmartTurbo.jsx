import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

export default function ProjectMoveSmartTurbo() {
  return (
    <article className="proj" id="p-movesmart">
      <span className="num">07</span>
      <span className="tag">PROYECTOS UNIVERSITARIOS</span>
      <h3>
        {"MoveSmart "}
        <em>y</em>
        {" Turbo Wheels"}
      </h3>
      <span className="tagline">FRONT-END · GESTIÓN DE PROYECTO</span>
      <div className="duo">
        <div className="blk cr">
          <h3>MoveSmart</h3>
          <p className="txt">Ingeniería de Software II — Front-end y gestión de proyecto</p>
          <div className="grid stack">
            <Ph label="MoveSmart — Inicio" src={img('movesmart/inicio.jpg')} className="round wide" />
            <Ph label="MoveSmart — Funcionalidades" src={img('movesmart/funciones.jpg')} className="round wide" />
          </div>
        </div>
        <div className="blk vi">
          <h3>Turbo Wheels</h3>
          <p className="txt">Bases de Datos II — Front-end</p>
          <div className="grid stack t3">
            <Ph label="Turbo Wheels — Bienvenida" src={img('turbo/bienvenida.jpg')} className="round wide" />
            <Ph label="Turbo Wheels — Módulo de nómina" src={img('turbo/nomina.jpg')} className="round wide" />
            <Ph label="Turbo Wheels — Inicio de sesión" src={img('turbo/login.jpg')} className="round wide" />
          </div>
        </div>
      </div>
    </article>
  );
}

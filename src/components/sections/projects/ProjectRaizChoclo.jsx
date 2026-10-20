import Ph from '../../ui/Ph';
import { img } from '../../../utils/img';

const FLOWS = ['Entrada a la app', 'Home y búsqueda', 'Producto y pedido', 'Perfil personal'];

export default function ProjectRaizChoclo() {
  return (
    <article className="proj" id="p-raiz-choclo">
      <span className="num">06</span>
      <span className="tag">PROTOTIPOS EN FIGMA</span>
      <h3>
        {"Raíz "}
        <em>y</em>
        {" Choclo"}
      </h3>
      <span className="tagline">SISTEMAS DE DISEÑO + FLUJOS MULTIPANTALLA</span>
      <p className="txt">Dos proyectos de un curso de Figma: sistemas de diseño completos y flujos multipantalla para apps de contexto de restaurante universitario.</p>
      <div className="duo flows">
        <div className="blk oliva">
          <div className="blk-head"><span className="mono-badge">R</span><h3>Raíz</h3></div>
          <Ph label="Raíz — 4 flujos de la app" src={img('raiz-choclo/raiz.jpg')} className="round nat" />
          <ul className="flow-list">{FLOWS.map((f, i) => <li key={f}><b>0{i + 1}</b>{f}</li>)}</ul>
        </div>
        <div className="blk naranja">
          <div className="blk-head"><span className="mono-badge">C</span><h3>Choclo</h3></div>
          <Ph label="Choclo — 4 flujos de la app" src={img('raiz-choclo/choclo.jpg')} className="round nat tall" />
          <ul className="flow-list">{FLOWS.map((f, i) => <li key={f}><b>0{i + 1}</b>{f}</li>)}</ul>
        </div>
      </div>
    </article>
  );
}

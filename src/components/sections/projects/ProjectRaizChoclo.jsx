import Ph from '../../ui/Ph';

export default function ProjectRaizChoclo() {
  return (
    <article className="proj rv">
      <span className="num">04</span>
      <h3>
        {"Raíz "}
        <em>y</em>
        {" Choclo"}
      </h3>
      <span className="tagline">PROTOTIPOS EN FIGMA</span>
      <p className="txt">Dos proyectos de un curso de Figma: sistemas de diseño completos y flujos multipantalla para apps de contexto de restaurante universitario.</p>
      <div className="duo">
        <div className="blk oliva">
          <h3>Raíz</h3>
          <div className="grid g4" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            <Ph label="Entrada a la app" src="" className="phone" />
            <Ph label="Home y exploración / búsqueda" src="" className="phone" />
            <Ph label="Producto y pedido" src="" className="phone" />
            <Ph label="Perfil personal" src="" className="phone" />
          </div>
        </div>
        <div className="blk naranja">
          <h3>Choclo</h3>
          <div className="grid g4" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            <Ph label="Entrada a la app" src="" className="phone" />
            <Ph label="Home y exploración / búsqueda" src="" className="phone" />
            <Ph label="Producto y pedido" src="" className="phone" />
            <Ph label="Perfil personal" src="" className="phone" />
          </div>
        </div>
      </div>
    </article>
  );
}

import Ph from '../../ui/Ph';

export default function ProjectRedes() {
  return (
    <article className="proj rv">
      <span className="num">08</span>
      <h3>
        {"Contenido que "}
        <em>conecta</em>
      </h3>
      <span className="tagline">DISEÑO PARA REDES SOCIALES</span>
      <p className="txt">Piezas gráficas para Tepuy Race, Empáticas y otras marcas. Variando estilos y formatos según cada plataforma.</p>
      <div className="scrap">
        <Ph label="HISTORIA: Tepuy Race" src="" style={{ aspectRatio: "9/16" }} />
        <Ph label="POST: Empáticas" src="" className="sq" />
        <Ph label="CARRUSEL: portada" src="" style={{ aspectRatio: "4/5" }} />
        <Ph label="POST: otra marca" src="" className="sq" />
        <Ph label="HISTORIA: otra marca" src="" style={{ aspectRatio: "9/16" }} />
      </div>
    </article>
  );
}

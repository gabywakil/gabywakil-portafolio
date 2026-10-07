import Ph from '../../ui/Ph';

export default function ProjectEmpaticas() {
  return (
    <article className="proj rv">
      <span className="num">03</span>
      <h3>
        Em
        <em>páticas</em>
      </h3>
      <span className="tagline">IDENTIDAD VISUAL DE MARCA + SITIO WEB</span>
      <p className="txt">Desarrollo de identidad visual de marca y sitio web, enfocada en bienestar, eventos y salud mental.</p>
      <div className="split">
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <Ph label="LOGO: Empáticas" src="" className="circle" />
          <Ph label="BANNER: evento" src="" className="oval" />
        </div>
        <div className="grid g4">
          <Ph label="MOCKUP 1" src="" className="phone" />
          <Ph label="MOCKUP 2" src="" className="phone" />
          <Ph label="MOCKUP 3" src="" className="phone" />
          <Ph label="MOCKUP 4" src="" className="phone" />
        </div>
      </div>
    </article>
  );
}

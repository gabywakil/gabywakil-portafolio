
export default function Nav() {
  return (
    <nav className="nav" aria-label="Principal">
      <a className="logo" href="#inicio">Gaby W.</a>
      <ul>
        <li>
          <a href="#sobre">Sobre mí</a>
        </li>
        <li>
          <a href="#habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
      <a className="btn" href="#contacto">Hablemos</a>
    </nav>
  );
}

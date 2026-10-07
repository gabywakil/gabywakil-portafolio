import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="darker nf">
      <div className="wrap">
        <span className="tag">404</span>
        <h2>Página <em>no encontrada</em></h2>
        <Link className="btn" to="/">Volver al inicio</Link>
      </div>
    </section>
  );
}

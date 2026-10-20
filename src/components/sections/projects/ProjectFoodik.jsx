import Ph from '../../ui/Ph';
import Carousel from '../../ui/Carousel';
import { img } from '../../../utils/img';

const SCREENS = [
  ['login', 'Inicio de sesión'],
  ['home', 'Home y mapa'],
  ['restaurante', 'Detalle del restaurante'],
  ['reserva', 'Reservar mesa'],
  ['favoritos', 'Favoritos'],
  ['dividir', 'Dividir la cuenta'],
  ['resumen', 'Resumen de la cuenta'],
  ['cuentas', 'Mis cuentas'],
  ['reservas', 'Mis reservas'],
];

export default function ProjectFoodik() {
  return (
    <article className="proj" id="p-foodik">
      <span className="num">02</span>
      <span className="tag">CASO DE ESTUDIO — FIGMA</span>
      <h3>
        Food
        <em>ik</em>
      </h3>
      <span className="tagline">APP MÓVIL PARA RESTAURANTES UNIVERSITARIOS</span>
      <p className="txt">Proyecto académico en equipo. Diseñé el sistema de diseño completo y los flujos multipantalla en Base44 para una app que permite descubrir restaurantes, reservar mesa y dividir la cuenta.</p>
      <Carousel label="Carrusel de pantallas de Foodik">
        {SCREENS.map(([f, l]) => (
          <Ph key={f} label={`Foodik — ${l}`} src={img(`foodik/${f}.jpg`)} className="phone" pos="top" />
        ))}
      </Carousel>
    </article>
  );
}

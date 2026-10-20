import Ph from '../../ui/Ph';
import Tabs from '../../ui/Tabs';
import { img } from '../../../utils/img';

const phones = (list) => (
  <div className={`grid lumo-grid n${list.length}`}>
    {list.map(([f, l]) => (
      <Ph key={f} label={`LumoBot — ${l}`} src={img(`lumobot/${f}.jpg`)} className="phone" pos="top" />
    ))}
  </div>
);

const TABS = [
  { id: 'widget', label: 'Widget', content: phones([
    ['noticia-con-widget', 'Noticia con el widget de Lumo'],
    ['analizando', 'Lumo está verificando'],
    ['resultado-verde', 'Resultado: verificado'],
    ['resultado-rojo', 'Resultado: probablemente falso'],
  ]) },
  { id: 'semaforo', label: 'Semáforo', content: phones([
    ['resultado-verde', 'Verificado'],
    ['resultado-amarillo', 'Dudoso'],
    ['resultado-rojo', 'Probablemente falso'],
    ['resultado-ia', 'Generado por IA'],
    ['resultado-sin-informacion', 'Sin información'],
  ]) },
  { id: 'detalle', label: 'Detalle', content: phones([
    ['detalle-rojo', 'Detalle: probablemente falso'],
    ['detalle-ia', 'Detalle: generado por IA'],
    ['detalle-verde', 'Detalle: verificado'],
    ['semaforo', '¿Cómo funciona el semáforo?'],
  ]) },
  { id: 'app', label: 'App', content: phones([
    ['inicio', 'Inicio'],
    ['verificar-manualmente', 'Verificar contenido'],
    ['historial', 'Historial'],
    ['ajustes', 'Ajustes'],
  ]) },
  { id: 'acceso', label: 'Onboarding', content: phones([
    ['bienvenida-paso-1', 'Bienvenida: paso 1'],
    ['bienvenida-paso-2', 'Bienvenida: activar el widget'],
    ['iniciar-sesion', 'Iniciar sesión'],
    ['registro', 'Crear cuenta'],
  ]) },
];

const STATES = [
  ['#22A559', 'Verificado'],
  ['#F5B324', 'Dudoso'],
  ['#E5383B', 'Probablemente falso'],
  ['#8B4DFF', 'Generado por IA'],
  ['#8A94A8', 'Sin información'],
];

export default function ProjectLumoBot() {
  return (
    <article className="proj full lumo" id="p-lumobot">
      <span className="num">05</span>
      <span className="tag">PROYECTO DE GRADO · UX/UI</span>
      <h3>
        {"Lumo"}
        <em>Bot</em>
      </h3>
      <span className="tagline">PROTOTIPO DE APP MÓVIL · VERIFICACIÓN DE NOTICIAS CON IA</span>
      <div className="intro-row">
        <div>
          <p className="txt">Mi proyecto de grado en la Universidad El Bosque: un sistema multiagente que verifica noticias y detecta contenido generado por IA en el contexto colombiano. Diseñé la experiencia completa alrededor de Lumo, la mascota: un widget flotante que verifica la publicación sin salir de la red social y un semáforo que explica el resultado en segundos.</p>
          <ul className="states" aria-label="Estados del semáforo">
            {STATES.map(([c, l]) => (
              <li key={l}><i style={{ background: c }} aria-hidden="true" />{l}</li>
            ))}
          </ul>
        </div>
        <div className="ficha">
          <span><b>Rol</b>UX/UI + desarrollo</span>
          <span><b>Prototipo</b>Figma Make, Stitch</span>
          <span><b>Tipo</b>Proyecto de grado</span>
        </div>
      </div>
      <Tabs label="Flujos del prototipo de LumoBot" tabs={TABS} />
    </article>
  );
}

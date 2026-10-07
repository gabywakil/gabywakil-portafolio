// Marco de imagen. Sin "src" muestra el placeholder con su etiqueta.
// Para poner tu imagen: <Ph label="..." src="/img/mi-foto.jpg" alt="Descripción" />
export default function Ph({ label, src, alt, className = '', style }) {
  return (
    <figure className={`ph ${className}${src ? ' filled' : ''}`.trim()} style={style}>
      {src ? <img src={src} alt={alt || label} loading="lazy" /> : <figcaption>{label}</figcaption>}
    </figure>
  );
}

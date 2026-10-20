// Marco de imagen. Sin "src" muestra el placeholder con su etiqueta.
// Con "src" la imagen se puede ampliar (lightbox) con clic o Enter.
// pos = object-position (ej. "top"), className "nat" = respeta la proporción real de la imagen.
export default function Ph({ label, src, alt, className = '', style, pos }) {
  if (!src) {
    return (
      <figure className={`ph ${className}`.trim()} style={style}>
        <figcaption>{label}</figcaption>
      </figure>
    );
  }
  return (
    <figure
      className={`ph filled ${className}`.trim()}
      style={style}
      tabIndex={0}
      role="button"
      aria-label={`Ampliar: ${alt || label}`}
      data-zoom
    >
      <img src={src} alt={alt || label} loading="lazy" decoding="async" style={pos ? { objectPosition: pos } : undefined} />
    </figure>
  );
}

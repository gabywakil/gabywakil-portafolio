// Sticker troquelado (estático). kind: hr, hp (corazones), dp, dc (margaritas), ch (cerezas), sp, sr (destellos)
// Tamaño con style={{ "--sz": "100px" }} y posición con left/right/top/bottom.
export default function Sticker({ kind, style }) {
  return <span className={`stk k-${kind}`} style={style} aria-hidden="true" />;
}

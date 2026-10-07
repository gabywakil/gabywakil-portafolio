// Sticker troquelado. kind: hr, hp (corazones), dp, dc (margaritas), ch (cerezas), sp, sr (destellos)
// anim: 1 flota · 2 gira · 3 late · 4 se balancea · 5 titila
export default function Sticker({ kind, anim = 1, style }) {
  return <span className={`stk k-${kind} a${anim}`} style={style} aria-hidden="true" />;
}

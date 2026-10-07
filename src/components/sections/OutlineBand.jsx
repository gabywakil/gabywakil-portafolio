import Sticker from '../ui/Sticker';

export default function OutlineBand() {
  return (
    <div className="outline" aria-hidden="true">
      <Sticker kind="ch" anim={1} style={{ left: "2%", top: "10%", "--sz": "110px" }} />
      <Sticker kind="dp" anim={2} style={{ right: "3%", bottom: "8%", "--sz": "120px" }} />
      <p style={{ "--f": "25%", "--t": "-15%" }}>Where design</p>
      <p style={{ "--f": "-25%", "--t": "15%" }}>meets code</p>
    </div>
  );
}

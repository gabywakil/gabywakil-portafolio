import Sticker from '../ui/Sticker';
import ProjectTepuy from './projects/ProjectTepuy';
import ProjectFoodik from './projects/ProjectFoodik';
import ProjectEmpaticas from './projects/ProjectEmpaticas';
import ProjectRaizChoclo from './projects/ProjectRaizChoclo';
import ProjectMoveSmartTurbo from './projects/ProjectMoveSmartTurbo';
import ProjectConMariaBonita from './projects/ProjectConMariaBonita';
import ProjectByAlexandra from './projects/ProjectByAlexandra';
import ProjectRedes from './projects/ProjectRedes';
import ProjectOtros from './projects/ProjectOtros';

export default function Projects() {
  return (
    <section className="dark" id="proyectos">
      <div className="decor" aria-hidden="true">
        <Sticker kind="dp" anim={2} style={{ right: "2%", top: "2%", "--sz": "120px" }} />
        <Sticker kind="ch" anim={1} style={{ left: "1%", top: "20%", "--sz": "110px" }} />
        <Sticker kind="hr" anim={3} style={{ right: "2%", top: "36%", "--sz": "90px" }} />
        <Sticker kind="dc" anim={2} style={{ left: "1%", top: "52%", "--sz": "125px" }} />
        <Sticker kind="hp" anim={1} style={{ right: "2%", top: "68%", "--sz": "95px" }} />
        <Sticker kind="ch" anim={1} style={{ left: "1%", top: "82%", "--sz": "105px" }} />
        <Sticker kind="sp" anim={5} style={{ right: "3%", top: "90%", "--sz": "60px" }} />
        <Sticker kind="sr" anim={5} style={{ left: "50%", top: "1%", "--sz": "50px" }} />
        <b className="bdg" style={{ right: "12%", top: "1.5%" }}>mira!</b>
        <b className="bdg" style={{ left: "3%", top: "60%" }}>wow</b>
      </div>
      <div className="wrap">
        <h2 className="rv">
          Pro
          <em>yectos</em>
        </h2>
        <div className="mq dk logos" aria-hidden="true" style={{ margin: "0 -5vw 1rem" }}>
          <div className="track">
            <span>{"Tepuy Race ✦ Foodik ✦ Empáticas ✦ Raíz y Choclo ✦ MoveSmart ✦ Turbo Wheels ✦ Con María Bonita ✦ By Alexandra Fernández ✦ "}</span>
            <span>{"Tepuy Race ✦ Foodik ✦ Empáticas ✦ Raíz y Choclo ✦ MoveSmart ✦ Turbo Wheels ✦ Con María Bonita ✦ By Alexandra Fernández ✦ "}</span>
          </div>
        </div>
        <ProjectTepuy />
        <ProjectFoodik />
        <ProjectEmpaticas />
        <ProjectRaizChoclo />
        <ProjectMoveSmartTurbo />
        <ProjectConMariaBonita />
        <ProjectByAlexandra />
        <ProjectRedes />
        <ProjectOtros />
      </div>
    </section>
  );
}

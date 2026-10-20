import Sticker from '../ui/Sticker';
import ProjectIndex from './ProjectIndex';
import ProjectTepuy from './projects/ProjectTepuy';
import ProjectFoodik from './projects/ProjectFoodik';
import ProjectEmpaticas from './projects/ProjectEmpaticas';
import ProjectEmpaticasWeb from './projects/ProjectEmpaticasWeb';
import ProjectLumoBot from './projects/ProjectLumoBot';
import ProjectGWStudios from './projects/ProjectGWStudios';
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
        <Sticker kind="dp" style={{ right: "2%", top: "1.5%", "--sz": "110px" }} />
        <Sticker kind="ch" style={{ left: "1%", top: "45%", "--sz": "100px" }} />
        <Sticker kind="dc" style={{ right: "2%", top: "88%", "--sz": "110px" }} />
      </div>
      <div className="wrap">
        <span className="tag">03 — Proyectos</span>
        <h2 className="rv">
          {"Proyectos "}
          <em>seleccionados</em>
        </h2>
        <ProjectIndex />
        <ProjectTepuy />
        <ProjectFoodik />
        <ProjectEmpaticas />
        <ProjectEmpaticasWeb />
        <ProjectLumoBot />
        <ProjectRaizChoclo />
        <ProjectMoveSmartTurbo />
        <ProjectConMariaBonita />
        <ProjectByAlexandra />
        <ProjectGWStudios />
        <ProjectRedes />
        <ProjectOtros />
      </div>
    </section>
  );
}

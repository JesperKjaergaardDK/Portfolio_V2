import Project from "../../UI/Project";
import {projects} from "../../../utils/project_list.json";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="text_center">My Work in Action</h2>

      <div className="projects__list">
        {projects.map((projects, index) => (
          <Project
            key={index}
            id={projects.id}
            title={projects.title}
            short_description={projects.short_description}
            img={projects.img}
            alt={projects.alt}
            website={projects.website}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects

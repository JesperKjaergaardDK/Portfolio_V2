import Project from "../../UI/Project";
import {projects} from "../../../utils/project_list.json";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="text_center">My Work in Action</h2>
      
      {projects.map((projects, index) => (
        <Project
          key={index}
          title={projects.title}
          description={projects.description}
          img={projects.img}
          site={projects.site}
          project_site={projects.project_site}
        />
      ))}     

    </section>
  );
}

export default Projects
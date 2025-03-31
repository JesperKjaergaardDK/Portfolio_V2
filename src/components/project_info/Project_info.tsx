import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";
import { useLocation } from "react-router-dom";
import Button from "../UI/Button";
import { projects } from "../../utils/project_list.json";
import { list } from "../../utils/icon_list.json";
import Icon from "../UI/Icon";

function Project_info() {
  type tool = {
    "icon_name": string,
    "src": string,
    "alt": string,
} 



  const img_path = "/src/assets/projects/";

  const project_id = parseInt(location.pathname.split("/")[2]);
  const project = projects[project_id];

  return (
    <>
      <Header />
      <section className="project_info">
        <img
          className="project_info__img"
          src={`${img_path}${project.img}`}
          alt={project.alt}
        />

        <div className="project_info__header">
          <h1>{project.title}</h1>
          <Button is_highlight>View website</Button>
        </div>

        <div className="project_info__details">
          <p>
           {project.description}
          </p>

          <div className="project_info__tools">
            {project.skills.map((skill, index) => {
              let tool_used : {bool: boolean, index: number} = {bool: false, index: 0}

              list.forEach((tool, index_tool) => {
                if (tool.icon_name == skill) {
                  tool_used.bool = true
                  tool_used.index = index_tool
                }
              });

              const icon: tool = list[tool_used.index];

              return tool_used.bool ? (
                <Icon
                  key={index}
                  icon_name={skill}
                  src={icon.src}
                  alt={icon.alt}
                />
              ) : null;
            })}
          </div>
        </div>

        <div className="project_info__gallery"></div>
      </section>
      <Footer />
    </>
  );
}

export default Project_info;

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";
import Button from "../UI/Button";
import { projects } from "../../utils/project_list.json";
import { combind_list } from "../../utils/skill_list.json";
import Icon from "../UI/Icon";

function Project_info() {
  type skill = {
    icon_name: string;
    src: string;
    alt: string;
  };

  type imageModule = {
    default: string;
  };

  const thumbnail_path = "/src/assets/projects/";

  const project_id = parseInt(location.pathname.split("/")[2]);
  const project = projects[project_id];

  //Creates skill section
  //Go though all of the projects skills
  const skills = project.skills.map((proj_skill, index) => {
    let skill_used: { bool: boolean; index: number } = {
      bool: false,
      index: 0,
    };

    //Go though all my skills to find its index to get the correct icon for it
    combind_list.forEach((combind_skill, combind_index) => {
      if (combind_skill.icon_name == proj_skill) {
        skill_used.bool = true;
        skill_used.index = combind_index;
      }
    });

    const skill_icon: skill = combind_list[skill_used.index];

    return skill_used.bool ? (
      <Icon
        key={index}
        icon_name={proj_skill}
        src={skill_icon.src}
        alt={skill_icon.alt}
      />
    ) : null;
  });

  //Creates gallery section
  //Get images out as an object
  const gallery_object = import.meta.glob(
    "/src/assets/projects/loopstudio/gallery/desktop/*.{png,jpg,jpeg,svg}",
    {
      eager: true,
    }
  );

  //Convert gallery object to an array
  const gallery_list: imageModule[] = Object.values(
    gallery_object
  ) as imageModule[];

  const gallery_lenght: number = gallery_list.length;
  let count_gallery: number = 0;

  //Makes the img for gallery
  const gallery_array = gallery_list.map((img, index) => (
    <img
      className={`img__${
        (count_gallery += 1) + 1 <= gallery_lenght ? "partner" : "single"
      }`}
      key={index}
      src={img.default}
      alt={`${project.title} gallery image`}
    />
  ));

  return (
    <>
      <Header />
      <section className="project_info">
        <img
          className="project_info__thumbnail"
          src={`${thumbnail_path}${project.img}`}
          alt={project.alt}
        />

        <div className="project_info__content">
          <div className="project_info__header">
            <h1>{project.title}</h1>
            <a href={project.website}>
              <Button is_highlight>View website</Button>
            </a>
          </div>

          <div className="project_info__description">
            <p>{project.description}</p>
            <div className="project_info__tools">{skills}</div>
          </div>
        </div>

        <div className="project_info__gallery">{gallery_array}</div>
      </section>
      <Footer />
    </>
  );
}

export default Project_info;

import Header from "../../components/sections/header/Header";
import Footer from "../../components/sections/footer/Footer";
import Button from "../../components/UI/Button";
import { projects } from "../../utils/project_list.json";
import { combind_list } from "../../utils/skill_list.json";
import Icon from "../../components/UI/Icon";
import { Link, useParams } from "react-router-dom";
import Error from "../../pages/error/Error";
import { useEffect } from "react";

function Project_info() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  type skill = {
    icon_name: string;
    src: string;
    alt: string;
  };

  type imageModule = {
    default: string;
  };

  const thumbnail_path = "/src/assets/projects/";
  const project_id = useParams<{ project_id: string }>();

  //const project: number | null = test.project_id ? projects[parseInt(test.project_id)] : null;
  const project: (typeof projects)[number] | null = project_id.project_id
    ? projects[parseInt(project_id.project_id)]
    : null;

  if (!project) {
    return <Error />;
  }

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
            <Link to={project.website}>
              <Button is_highlight>View website</Button>
            </Link>
          </div>

          <div className="project_info__description">
            <div className="project_info__text">
              {Array.isArray(project.full_description) &&
                project.full_description.map((line: string, index: number) => (
                  <p key={index}>{line}</p>
                ))}
            </div>

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

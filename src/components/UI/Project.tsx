import Button from "./Button";


interface props {
  id: number;
  title: string;
  short_description: string;
  img: string;
  alt: string;
  website: string;
}

function Project(prop: props) {
  const img_path = "src/assets/projects/";

  return (
    <div className="project">
      <div className="project__info">
        <h3 className="text_center">{prop.title}</h3>
        <p>{prop.short_description}</p>

        <div className="project__cta">
          <a href={prop.website}>
            <Button>Visit site</Button>
          </a>

          <a href={`project/${prop.id}`}>
            <Button>Project details</Button>
          </a>
        </div>
      </div>

      <img className="project__img" src={`${img_path}${prop.img}`} alt="" />
    </div>
  );
}

export default Project;

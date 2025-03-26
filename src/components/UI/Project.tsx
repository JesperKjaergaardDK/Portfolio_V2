import Button from "./Button";



interface props {
  title: string;
  description: string;
  img: string;
  site: string;
  project_site: string;
}

function Project(prop: props) {
  return (
    <div className="project">
      <div className="project__info">
        <h3 className="text_center">{prop.title}</h3>
        <p>{prop.description}</p>

        <div className="project__cta">
          <a href="#">
            <Button>Visit site</Button>
          </a>

          <a href="#">
            <Button>Project details</Button>
          </a>
        </div>
      </div>

      <img className="project__img" src={prop.img} alt="" />
    </div>
  );
}

export default Project;

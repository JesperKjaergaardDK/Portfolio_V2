import Icon from "../../UI/Icon";
import { icons_code, icons_design } from "../../../utils/icon_list.json";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="text_center">My Toolbox</h2>

      <div className="skills__container">
        <div className="skills__code">
          <h6>Development</h6>
          <div className="skills__collection">
            {icons_code.map((icon, index) => (
              <Icon
                key={index}
                icon_name={icon.icon_name}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>

        <div className="skills__design">
          <h6>Design</h6>
          <div className="skills__collection">
            {icons_design.map((icon, index) => (
              <Icon
                key={index}
                icon_name={icon.icon_name}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

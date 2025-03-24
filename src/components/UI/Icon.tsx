
interface props {
  icon_name: string
  src: string
  alt: string
}

function Icon(prop: props) {
  return (
    <div className="skills__icon">
      <h6>{prop.icon_name}</h6>
      <img src={prop.src} alt={prop.alt} />
    </div>
  );
}

export default Icon
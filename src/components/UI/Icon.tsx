
interface props {
  icon_name: string
  src: string
  alt: string
}

function Icon(prop: props) {
  return (
    <div className="skills__icon">
      <p>{prop.icon_name}</p>
      <img src={prop.src} alt={prop.alt} />
    </div>
  );
}

export default Icon
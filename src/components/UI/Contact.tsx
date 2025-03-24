interface props {
  src: string;
  alt: string;
  children: string;
}

function Contact(prop: props) {
  return (
    <div className="contact">
      <img src={prop.src} alt={prop.alt} />
      <p>{prop.children}</p>
    </div>
  );
}

export default Contact;


interface Props {
  project: {
    id: number;
    title: string;
    short_description: string;
    full_description: string[];
    img: string;
    alt: string;
    website: string;
    img_folder: string;
    gal_desktop: string[];
    gal_mobile: string[];
    skills: string[];
  };
}

function Gallery({ project }: Props) {
  const desktop_length = project.gal_desktop.length - 1;

  const build_gallery = () => {
    const desktop_gallery = project.gal_desktop.map(
      (file_name: string, index: number) => (
        <img
          className={
            index == desktop_length && desktop_length % 2 == 0
              ? "last_img__desktop"
              : "img__desktop"
          }
          key={index}
          src={`/projects/${project.img_folder}/gallery/desktop/${file_name}`}
          alt={`${project.title} gallery image`}
        />
      )
    );

    const mobile_gallery = project.gal_mobile.map(
      (file_name: string, index: number) => (
        <img
          className="img__mobile"
          key={index}
          src={`/projects/${project.img_folder}/gallery/mobile/${file_name}`}
          alt={`${project.title} gallery image`}
        />
      )
    );

    return { desktop_gallery, mobile_gallery };
  };

  return (
    <div className="project_info__gallery">
      {build_gallery().desktop_gallery}
      {build_gallery().desktop_gallery}
    </div>
  );
}

export default Gallery;

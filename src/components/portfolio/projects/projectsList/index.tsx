import imageNotFound from "@assets/image-not-found.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPlus,
  faRssSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { button } from "@styles/index";

interface IProjectsListProps {
  data: {
    banner: string;
    description: string;
    homepage: string;
    html_url: string;
    id: number;
    name: string;
    topics: string[];
  }[];
}

export const ProjectsList = ({ data }: IProjectsListProps) => {
  const hiddenIcons: string[] = ["portfolio", "contextapi", "tests"];

  if (!data) return;

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {data.length > 0 &&
        data.map((project) => (
          <div className="flex flex-col w-full rounded-lg bg-panel overflow-hidden p-4 pb-6 min-w-[25rem] sm:min-w-[30rem] flex-1 max-w-[60rem]">
            <div className="max-h-[30rem] sm:max-h-[40rem] h-full rounded-lg overflow-hidden">
              <img
                src={project.banner ? project.banner : imageNotFound}
                alt={project.name}
                className="size-full object-left-top object-cover"
              />
            </div>
            <div className="flex flex-col items-center h-fit">
              <div className="flex flex-col items-center w-full p-2">
                <h3 className="text-center text-textColor font-bold text-base capitalize">
                  {project.name.replace(/-/g, " ")}
                </h3>
                <p className="font-normal text-primary text-center first-letter:uppercase">
                  {project.description}
                </p>
              </div>
              <div className="w-full flex flex-wrap justify-center gap-2 p-5 h-full">
                {project.topics
                  .filter((topic) => !hiddenIcons.includes(topic))
                  .map((icon) => (
                    <p
                      className="bg-primary h-fit px-4 py-2 rounded-xl capitalize flex-1 min-w-fit text-center text-textColor font-bold  max-w-80"
                      key={icon}
                    >
                      {icon}
                    </p>
                  ))}
              </div>
              <p className="font-bold text-textColor text-center mb-2">
                Acesse o projeto:
              </p>
              <div className="flex gap-5 items-center flex-wrap">
                {project.homepage !== "" && (
                  <a
                    href={project.html_url}
                    target="_blank"
                    title="Repositório Github"
                    className="bg-secondary text-white transition duration-300 opacity-60 hover:opacity-100 flex items-center group p-4 md:p-6"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                <a
                  href={project.homepage}
                  target="_blank"
                  title="Página web"
                  className="bg-secondary text-white transition duration-300 opacity-60 hover:opacity-100 flex items-center group p-4 md:p-6"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <FontAwesomeIcon icon={faRssSquare} />
                </a>
                <button
                  className="bg-secondary text-white transition duration-300 opacity-60 hover:opacity-100 flex items-center group p-4 md:p-6"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <FontAwesomeIcon icon={faImage} title="Ver imagem" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

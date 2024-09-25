import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageDialog } from "./imageDialog";
import { ProjectProps } from "utils/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons";

export const ProjectLinks = ({ project }: ProjectProps) => {
  return (
    <>
      <p className="cursor-default font-bold text-textColor text-center mb-2">
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
        <ImageDialog projectImage={project.banner} projectName={project.name} />
      </div>
    </>
  );
};

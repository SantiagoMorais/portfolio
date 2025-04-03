import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IGithubRepos } from "github-automated-repos";
import { ImageDialog } from "./imageDialog";

export const ProjectLinks = ({ project }: { project: IGithubRepos }) => (
  <>
    <p className="text-textColor mb-2 cursor-default text-center font-bold">
      Acesse o projeto:
    </p>
    <div className="flex flex-wrap items-center gap-5">
      {project.homepage !== "" && (
        <a
          href={project.html_url}
          target="_blank"
          title="Repositório Github"
          className="group bg-secondary flex items-center p-4 text-white opacity-60 transition duration-300 hover:opacity-100 md:p-6"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <FontAwesomeIcon icon={faGithub} className="text-medium" />
        </a>
      )}
      <a
        href={project.homepage}
        target="_blank"
        title="Página web"
        className="group bg-secondary flex items-center p-4 text-white opacity-60 transition duration-300 hover:opacity-100 md:p-6"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <FontAwesomeIcon icon={faRssSquare} className="text-medium" />
      </a>
      <ImageDialog
        projectImage={project.banner[0]}
        projectName={project.name}
      />
    </div>
  </>
);

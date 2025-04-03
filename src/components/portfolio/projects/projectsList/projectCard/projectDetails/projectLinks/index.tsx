import { IPortfolioNode } from "@/core/interfaces/portfolio-query-interfaces";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageDialog } from "./imageDialog";

export const ProjectLinks = ({
  node,
}: {
  node: Pick<IPortfolioNode, "homePage" | "htmlUrl" | "banner" | "name">;
}) => (
  <div className="flex h-full flex-col items-center justify-end gap-2">
    <p className="text-textColor mt-auto cursor-default text-center font-bold">
      Acesse o projeto:
    </p>
    <div className="flex flex-wrap items-center gap-5">
      {node.homePage !== "" && (
        <a
          href={node.htmlUrl}
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
      {node.homePage && (
        <a
          href={node.homePage}
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
      )}
      <ImageDialog projectImage={node.banner?.url} projectName={node.name} />
    </div>
  </div>
);

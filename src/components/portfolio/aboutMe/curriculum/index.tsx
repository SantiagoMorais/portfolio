import { IResumesQuery } from "@/core/interfaces/resumes-query";
import { GET_RESUMES_QUERY } from "@/db/get-resumes-query";
import { button, subtitle } from "@/styles/index";
import { useQuery } from "@apollo/client";
import {
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Curriculum = () => {
  const { loading, error, data } = useQuery<IResumesQuery>(GET_RESUMES_QUERY);

  const handleContent = () => {
    if (loading)
      return (
        <p className="text-textColor flex items-center justify-center gap-2 text-center text-base">
          Carregando...{" "}
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </p>
      );

    if (error || !data)
      return (
        <p className="text-textColor flex items-center justify-center gap-2 text-center text-base">
          Não foi possível carregar os dados{" "}
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </p>
      );

    return data.resumes.map((resume) => (
      <a
        className={button({
          withBackground: "primaryColor",
          className: "text-white",
        })}
        href={resume.document.url}
        target="_blank"
        key={resume.title}
      >
        {resume.title}
      </a>
    ));
  };

  return (
    <div className="w-full">
      <h2
        className={`${subtitle({
          afterContent: "secondary",
          size: "medium",
          h3: "basic",
        })} text-textColor`}
      >
        Baixe o meu <span className="text-primary">Currículo</span>
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-8 md:gap-10">
        {handleContent()}
      </div>
    </div>
  );
};

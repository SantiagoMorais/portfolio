import { faFrown, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { button, subtitle } from "@styles/index";
import { PolygonEmoji } from "@components/polygonEmoji";

export const NotFound = ({
  pageType
}: {
  pageType: "postsList" | "general";
}) => {
  return (
    <div className=" flex flex-col w-full items-center p-10 pb-20 gap-10">
      <h2
        className={`text-textColor text-large md:text-extraLarge text-center pb-2 ${subtitle({ afterContent: "secondaryOnCleanBg" })}`}
      >
        Ops, página não encontrada.
      </h2>
      <PolygonEmoji icon={faFrown} message="404" />
      <p className="text-textColor text-base md:text-medium text-center">
        {pageType === "general" ? (
          <>
            Não encontramos a página que você procura. Por favor, tente
            novamente ou retorne para a página inicial:
          </>
        ) : (
          <>
            Por algum motivo não foi possível encontrar os dados das
            publicações. Por favor, tente mais tarde ou retorne para a página
            inicial.
          </>
        )}
      </p>
      <Link
        to={"/"}
        className={`flex items-center gap-5 text-medium text-textColor group ${button({ withBackground: "primaryColor" })}`}
      >
        <FontAwesomeIcon
          icon={faUndo}
          className="duration-300 group-hover:rotate-[-360deg] group-hover:scale-110"
        />{" "}
        Retornar
      </Link>
    </div>
  );
};

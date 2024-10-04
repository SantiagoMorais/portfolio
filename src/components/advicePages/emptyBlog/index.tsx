import { PolygonEmoji } from "@components/ui/polygonEmoji";
import { faSmileWink, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button, subtitle } from "@styles/index";
import { Link } from "react-router-dom";

export const EmptyBlog = () => {
  return (
    <div className=" flex flex-col w-full items-center p-10 pb-20 gap-10">
      <h2
        className={`text-textColor text-large md:text-extraLarge text-center pb-2 ${subtitle({ afterContent: "secondaryOnCleanBg" })}`}
      >
        Em breve, novas publicações!
      </h2>
      <PolygonEmoji icon={faSmileWink} message="Em breve!" />
      <p className="text-textColor text-base md:text-medium text-center">
        Estamos trabalhando para desenvolver novos conteúdos essenciais sobre
        desenvolvimento web e programação para você!
        <br />
        Enquanto isso, retorne à página inicial.
      </p>
      <Link
        to={"/"}
        className={`flex items-center gap-5 text-medium text-textColor group ${button({ withBackground: "primaryColor" })}`}
      >
        <FontAwesomeIcon
          icon={faUndo}
          className="duration-300 transition-transform group-hover:rotate-[-360deg] group-hover:scale-110"
        />{" "}
        Retornar
      </Link>
    </div>
  );
};

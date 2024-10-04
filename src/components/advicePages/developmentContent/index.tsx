import { faSmileWink, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { button, subtitle } from "@styles/index";
import { PolygonEmoji } from "@components/ui/polygonEmoji";

export const DevelopmentContent = () => {
  return (
    <div className="flex flex-col w-full items-center p-10 pb-20 gap-10">
      <h2
        className={`text-textColor text-medium md:text-extraLarge text-center pb-2 ${subtitle({ afterContent: "secondaryOnCleanBg", className: "mb-0" })}`}
      >
        Conteúdo em desenvolvimento!
      </h2>
      <PolygonEmoji message="Em breve" icon={faSmileWink} />
      <p className="text-textColor text-base md:text-medium text-center">
        Se acalme! Esta página está em desenvolvimento e em breve traremos mais
        conteúdos para você. <br />
        Enquanto isso, retorne à nossa página inicial:
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

import {
  faSmileWink,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import vector from "@assets/vector.png";
import { button, subtitle } from "@styles/index";

export const DevelopmentContent = () => {
  return (
    <div className="flex flex-col w-full items-center p-10 pb-20 gap-10">
      <h2
        className={`text-textColor text-medium md:text-extraLarge text-center pb-2 ${subtitle({ afterContent: "secondaryOnCleanBg", className: "mb-0" })}`}
      >
        Conteúdo em desenvolvimento!
      </h2>
      <div
        className="max-w-[60rem] max-h-[60rem] size-contain p-20 flex flex-col items-center gap-5"
        style={{
          background: `url(${vector}) no-repeat center center`,
          backgroundSize: "contain",
        }}
      >
        <FontAwesomeIcon
          icon={faSmileWink}
          className="size-2/3 text-textColor m-10 mb-0"
        />
        <p className="text-large md:text-giant font-extrabold text-textColor text-center leading-none md:mb-20">
          Em breve!
        </p>
      </div>
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

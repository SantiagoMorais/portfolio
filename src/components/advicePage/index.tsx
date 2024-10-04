import {
  faUndo,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { button, subtitle } from "@styles/index";
import { PolygonEmoji } from "@components/ui/polygonEmoji";

type AdvicePageProps = {
  title: string;
  adviceMessage: string;
  route: string;
  buttonText: string;
  icon: IconDefinition;
  polygonEmojiMessage?: string;
};

export const AdvicePage = ({
  adviceMessage,
  buttonText,
  icon,
  route,
  title,
  polygonEmojiMessage,
}: AdvicePageProps) => {
  return (
    <div className=" flex flex-col w-full items-center p-10 pb-20 gap-10">
      <h2
        className={`text-textColor text-large md:text-extraLarge text-center pb-2 ${subtitle({ afterContent: "secondaryOnCleanBg" })}`}
      >
        {title}
      </h2>
      <PolygonEmoji icon={icon} message={polygonEmojiMessage} />
      <p className="text-textColor text-base md:text-medium text-center">
        {adviceMessage}
      </p>
      <Link
        to={route}
        className={`flex items-center gap-5 text-medium text-textColor group ${button({ withBackground: "primaryColor" })}`}
      >
        <FontAwesomeIcon
          icon={faUndo}
          className="duration-300 group-hover:rotate-[-360deg] group-hover:scale-110"
        />{" "}
        {buttonText}
      </Link>
    </div>
  );
};

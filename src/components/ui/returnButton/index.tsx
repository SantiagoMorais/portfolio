import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "@styles/index";
import { Link } from "react-router-dom";

type ReturnButtonProps = {
    route: string;
    buttonText: string;
  };

export const ReturnButton = ({buttonText, route}: ReturnButtonProps) => {
  return (
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
  );
};

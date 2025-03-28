import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "@styles/index";
import { Link } from "react-router-dom";

type ReturnButtonProps = {
  route: string;
  buttonText: string;
};

export const ReturnButton = ({ buttonText, route }: ReturnButtonProps) => (
  <Link
    to={route}
    className={`group flex items-center gap-5 text-medium text-textColor ${button({ withBackground: "primaryColor" })}`}
  >
    <FontAwesomeIcon
      icon={faUndo}
      className="duration-300 group-hover:rotate-[-360deg] group-hover:scale-110"
    />{" "}
    {buttonText}
  </Link>
);

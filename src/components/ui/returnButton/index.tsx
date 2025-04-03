import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "@/styles/index";
import { Link } from "react-router-dom";

export const ReturnButton = ({
  buttonText,
  route,
}: {
  route: string;
  buttonText: string;
}) => (
  <Link
    to={route}
    className={`group text-medium text-textColor flex items-center gap-5 ${button({ withBackground: "primaryColor" })}`}
  >
    <FontAwesomeIcon
      icon={faUndo}
      className="duration-300 group-hover:scale-110 group-hover:rotate-[-360deg]"
    />{" "}
    {buttonText}
  </Link>
);

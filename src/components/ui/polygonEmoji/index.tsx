import vector from "@/assets/imgs/vector.png";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PolygonEmoji = ({
  icon,
  message,
}: {
  message?: string;
  icon: IconDefinition;
}) => (
  <div
    className="size-contain flex max-h-[60rem] max-w-[60rem] flex-col items-center justify-center p-20"
    style={{
      background: `url(${vector}) no-repeat center center`,
      backgroundSize: "contain",
    }}
  >
    <FontAwesomeIcon icon={icon} className="m-10 size-2/3 text-white" />
    {message && (
      <p className="text-large md:text-giant mb-10 text-center leading-none font-extrabold text-white">
        {message}
      </p>
    )}
  </div>
);

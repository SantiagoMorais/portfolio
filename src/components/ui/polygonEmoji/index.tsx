import vector from "@assets/imgs/vector.png";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IPolygonEmojiProps {
  message?: string;
  icon: IconDefinition;
}

export const PolygonEmoji = ({ icon, message }: IPolygonEmojiProps) => (
  <div
    className="size-contain flex max-h-[60rem] max-w-[60rem] flex-col items-center justify-center p-20"
    style={{
      background: `url(${vector}) no-repeat center center`,
      backgroundSize: "contain",
    }}
  >
    <FontAwesomeIcon icon={icon} className="m-10 size-2/3 text-white" />
    {message && (
      <p className="mb-10 text-center text-large font-extrabold leading-none text-white md:text-giant">
        {message}
      </p>
    )}
  </div>
);

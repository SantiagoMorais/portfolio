import vector from "@assets/vector.png";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IPolygonEmojiProps {
  message?: string;
  icon: IconDefinition;
}

export const PolygonEmoji = ({ icon, message }: IPolygonEmojiProps) => {
  return (
    <div
      className="max-w-[60rem] max-h-[60rem] size-contain p-20 flex flex-col items-center justify-center"
      style={{
        background: `url(${vector}) no-repeat center center`,
        backgroundSize: "contain",
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        className="size-2/3 text-white m-10"
      />
      {message && (
        <p className="text-center text-large md:text-giant font-extrabold text-white mb-10 leading-none">
          {message}
        </p>
      )}
    </div>
  );
};

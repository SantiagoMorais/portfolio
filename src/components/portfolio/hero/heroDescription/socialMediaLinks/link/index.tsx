import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILink {
    link: {
        id: string;
        title: string;
        link: string;
        icon: IconDefinition;
    }
}

export const Link: React.FC<ILink> = ({link}) => {
  return (
    <li key={link.id} title={link.title}>
      <a
        href={link.link}
        className="bg-secondary text-white px-6 py-6 hover: transition duration-300 opacity-60 hover:opacity-100 flex items-center group"
        target="_blank"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <FontAwesomeIcon icon={link.icon} className="text-medium " />
      </a>
    </li>
  );
};

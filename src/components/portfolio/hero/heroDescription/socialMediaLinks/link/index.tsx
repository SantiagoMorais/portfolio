import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaType } from "@utils/socialMediaLinks";

interface ILink {
  link: SocialMediaType
}

export const Link: React.FC<ILink> = ({ link }) => {
  return (
    <li key={link.id} title={link.title}>
      <a
        href={link.link}
        className="bg-secondary text-white transition duration-300 opacity-60 hover:opacity-100 flex items-center group p-4 md:p-6"
        target="_blank"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <FontAwesomeIcon
          icon={link.icon}
          className="text-base md:text-medium"
        />
      </a>
    </li>
  );
};

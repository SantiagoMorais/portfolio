import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaType } from "@utils/socialMediaLinks";

interface ILink {
  link: SocialMediaType;
}

export const SocialLink: React.FC<ILink> = ({ link }) => (
  <>
    {link && (
      <li key={link.id} title={link.title}>
        <a
          href={link.link}
          className="group flex items-center bg-secondary p-4 text-white opacity-60 transition duration-300 hover:opacity-100 md:p-6"
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
    )}
  </>
);

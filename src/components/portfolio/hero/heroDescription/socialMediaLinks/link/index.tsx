import { ISocialMedia } from "@/core/interfaces/social-media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLink = ({ link }: { link: ISocialMedia }) => (
  <>
    {link && (
      <li key={link.id} title={link.title}>
        <a
          href={link.link}
          className="group bg-secondary flex items-center p-4 text-white opacity-60 transition duration-300 hover:opacity-100 md:p-6"
          target="_blank"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <FontAwesomeIcon
            icon={link.icon}
            className="md:text-medium text-base"
          />
        </a>
      </li>
    )}
  </>
);

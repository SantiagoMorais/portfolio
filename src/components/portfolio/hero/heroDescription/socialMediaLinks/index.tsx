import { createId } from "@paralleldrive/cuid2";
import { githubProfile, linkedinUrl, whatsAppLink } from "utils/variables";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "./link";

export const SocialMediaLinks = () => {
  const socialMedia: {
    id: string;
    title: string;
    link: string;
    icon: IconDefinition;
  }[] = [
    { id: createId(), link: githubProfile, title: "Github", icon: faGithub },
    {
      id: createId(),
      link: linkedinUrl,
      title: "Linkedin",
      icon: faLinkedin,
    },
    {
      id: createId(),
      link: whatsAppLink,
      title: "Whatsapp",
      icon: faWhatsapp,
    },
    { id: createId(), link: whatsAppLink, title: "Email", icon: faAt },
  ];

  return (
    <div className="flex gap-5 mt-5 items-center flex-wrap">
      <p className="text-textColor mr-5 text-small md:text-base">
        Cheque minhas redes:
      </p>
      <ul className="flex gap-5 items-center flex-wrap">
        {socialMedia.map((link) => (
          <Link link={link} />
        ))}
      </ul>
    </div>
  );
};

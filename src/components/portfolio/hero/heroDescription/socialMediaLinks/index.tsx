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
import { twMerge } from "tailwind-merge";

type SocialMediaLinksProps = {
  className?: string;
};

export const SocialMediaLinks = ({ className }: SocialMediaLinksProps) => {
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
    <div className={twMerge("flex gap-5 mt-5 items-center flex-wrap", className)}>
      <p className="text-textColor mr-5 text-small text-center md:text-base">
        Cheque minhas redes:
      </p>
      <ul className="flex gap-2 items-center flex-wrap md:gap-5">
        {socialMedia.map((link) => (
          <Link link={link} />
        ))}
      </ul>
    </div>
  );
};

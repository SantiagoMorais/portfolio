import { createId } from "@paralleldrive/cuid2";
import { githubProfile, linkedinUrl, whatsAppLink } from "utils/variables";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export type SocialMediaType = {
  id: string;
  title: string;
  link: string;
  icon: IconDefinition;
};

export const socialMedia: SocialMediaType[] = [
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

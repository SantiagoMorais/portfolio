import { ISocialMedia } from "@core/interfaces/social-media";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { createId } from "@paralleldrive/cuid2";
import {
  email,
  githubProfile,
  linkedinUrl,
  whatsAppLink,
} from "utils/variables";

export const socialMedia: ISocialMedia[] = [
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
  { id: createId(), link: `mailto:${email}`, title: "Email", icon: faAt },
];

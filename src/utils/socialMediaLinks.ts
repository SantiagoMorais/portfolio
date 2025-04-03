import { ISocialMedia } from "@core/interfaces/social-media";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { createId } from "@paralleldrive/cuid2";
import { env } from "env";
import { whatsAppLink } from "utils/variables";

export const socialMedia: ISocialMedia[] = [
  {
    id: createId(),
    link: env.VITE_GITHUB_PROFILE,
    title: "Github",
    icon: faGithub,
  },
  {
    id: createId(),
    link: env.VITE_LINKEDIN_URL,
    title: "Linkedin",
    icon: faLinkedin,
  },
  {
    id: createId(),
    link: whatsAppLink,
    title: "Whatsapp",
    icon: faWhatsapp,
  },
  {
    id: createId(),
    link: `mailto:${env.VITE_EMAIL}`,
    title: "Email",
    icon: faAt,
  },
];

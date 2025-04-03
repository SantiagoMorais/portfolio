import { ISocialMedia } from "@/core/interfaces/social-media";
import { env } from "@/env";
import { whatsAppLink } from "@/utils/variables";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export const socialMedia: ISocialMedia[] = [
  {
    link: env.VITE_GITHUB_PROFILE,
    title: "Github",
    icon: faGithub,
  },
  {
    link: env.VITE_LINKEDIN_URL,
    title: "Linkedin",
    icon: faLinkedin,
  },
  {
    link: whatsAppLink,
    title: "Whatsapp",
    icon: faWhatsapp,
  },
  {
    link: `mailto:${env.VITE_EMAIL}`,
    title: "Email",
    icon: faAt,
  },
];

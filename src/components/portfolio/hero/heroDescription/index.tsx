import { button } from "@styles/index";
import { SocialMediaLinks } from "./socialMediaLinks";
import { whatsAppLink } from "utils/variables";
import { socialMedia } from "@utils/socialMediaLinks";

export const HeroDescription = () => (
  <div className="flex w-full flex-col gap-10 md:flex-1 md:gap-16">
    <div className="flex w-full flex-col leading-snug">
      <h2 className="text-medium font-medium text-textColor transition-colors duration-150 md:text-large">
        Olá, eu sou
      </h2>
      <h1 className="my-6 text-extraLarge font-bold leading-none text-primary md:text-giant md:font-extrabold">
        Felipe Santiago
      </h1>
      <h3 className="text-base font-normal text-textColor transition-colors duration-150 md:text-medium">
        Desenvolvedor <span className="font-bold text-primary">Fullstack</span>
      </h3>
    </div>
    <p className="mb-5 max-w-[70rem] text-small font-normal text-textColor opacity-70 transition-colors duration-150 md:text-base">
      Desenvolvedor web com foco em React, Next e desenvolvimento de APIs Node com TypeScript. Veja meus projetos no meu portfólio e entre
      em contato comigo pelas minhas redes!
    </p>
    <a
      href={whatsAppLink}
      target="_blank"
      className={button({
        withBackground: "primaryColor",
        className: "text-white",
      })}
    >
      Vamos conversar
    </a>
    <SocialMediaLinks socialMedia={socialMedia} />
  </div>
);

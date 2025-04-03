import { button } from "@styles/index";
import { SocialMediaLinks } from "./socialMediaLinks";
import { whatsAppLink } from "utils/variables";
import { socialMedia } from "@utils/socialMediaLinks";

export const HeroDescription = () => (
  <div className="flex w-full flex-col gap-10 md:flex-1 md:gap-16">
    <div className="flex w-full flex-col leading-snug">
      <h2 className="text-medium text-textColor md:text-large font-medium transition-colors duration-150">
        Olá, eu sou
      </h2>
      <h1 className="text-extraLarge text-primary md:text-giant my-6 leading-none font-bold md:font-extrabold">
        Felipe Santiago
      </h1>
      <h3 className="text-textColor md:text-medium text-base font-normal transition-colors duration-150">
        Desenvolvedor <span className="text-primary font-bold">Fullstack</span>
      </h3>
    </div>
    <p className="text-small text-textColor mb-5 max-w-[70rem] font-normal opacity-70 transition-colors duration-150 md:text-base">
      Desenvolvedor web com foco em React, Next e desenvolvimento de APIs Node
      com TypeScript. Veja meus projetos no meu portfólio e entre em contato
      comigo pelas minhas redes!
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

import { button } from "@styles/index";
import { SocialMediaLinks } from "./socialMediaLinks";
import { whatsAppLink } from "utils/variables";
import { socialMedia } from "@utils/socialMediaLinks";

export const HeroDescription = () => {
  return (
    <div className="flex flex-col gap-10 w-full md:flex-1 md:gap-16">
      <div className="flex flex-col w-full leading-snug">
        <h2 className="font-medium text-medium text-textColor transition-colors duration-150 md:text-large">
          Olá, eu sou
        </h2>
        <h1 className="font-bold text-extraLarge leading-none my-6 text-primary md:text-giant md:font-extrabold">
          Felipe Santiago
        </h1>
        <h3 className="font-normal text-base text-textColor transition-colors duration-150 md:text-medium">
          Desenvolvedor <span className="text-primary font-bold">Fullstack</span>
        </h3>
      </div>

      <p className="font-normal text-small opacity-70 text-textColor mb-5 transition-colors duration-150 md:text-base max-w-[70rem]">
        Sou apaixonado por criar interfaces amigáveis com React.js e TypeScript, integrando com banco de dados via Node JS.
        Veja meus projetos aqui e entre em contato comigo pelas minhas redes
        sociais!
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
};

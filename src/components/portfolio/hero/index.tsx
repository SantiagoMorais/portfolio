import heroImage from "@assets/hero-image.png";
import { button } from "@styles/index";
import { createId } from "@paralleldrive/cuid2";
import {
  email,
  githubProfile,
  linkedinUrl,
  whatsAppLink,
} from "utils/variables";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
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

  console.log(socialMedia);

  return (
    <div className="flex flex-col px-8 pb-16 gap-16 md:flex-row-reverse md:items-center md:px-20 md:pb-16">
      <div className="flex-1 flex justify-center">
        <img
          src={heroImage}
          alt="Imagem principal"
          className="max-w-[60rem] w-full"
          style={{ filter: "drop-shadow(0 15px 10px #19584F)" }}
        />
      </div>

      <div className="flex flex-col gap-10 w-full md:flex-1 md:gap-16">
        <div className="flex flex-col w-full leading-snug"> 
          <h2 className="font-medium text-medium text-textColor md:text-large">
            Olá, eu sou
          </h2>
          <h1 className="font-bold text-extraLarge leading-none my-6 text-primary md:text-giant md:font-extrabold">
            Felipe Santiago
          </h1>
          <h3 className="font-normal text-base text-textColor md:text-medium">
            Desenvolvedor <span className="text-primary font-bold">Frontend</span>
          </h3>
        </div>

        <p className="font-normal text-small opacity-70 text-textColor mb-5 md:text-base ">
          Sou apaixonado por criar interfaces amigáveis com React.js e
          TypeScript. Veja meus projetos aqui e entre em contato comigo nas
          minhas redes sociais!
        </p>

        <button className={button({ withBackground: "primaryColor" })}>
          Vamos conversar
        </button>

        <div className="flex gap-5 mt-5 items-center flex-wrap">
          <p className="text-textColor mr-5 text-small md:text-base">Cheque minhas redes:</p>
          <ul className="flex gap-5 items-center flex-wrap">
            {socialMedia.map((link) => (
              <li key={link.id} title={link.title}>
                <a
                  href={link.link}
                  className="bg-secondary text-white px-6 py-6 hover: transition duration-300 opacity-60 hover:opacity-100 flex items-center group"
                  target="_blank"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <FontAwesomeIcon icon={link.icon} className="text-medium " />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

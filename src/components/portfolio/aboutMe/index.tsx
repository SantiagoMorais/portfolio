import {
  faComputer,
  faDatabase,
  faFlask,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button, paragraph, subtitle } from "@styles/index";

export const AboutMe = () => {
  return (
    <section className="bg-secondaryPanel flex flex-col px-10 py-16 w-full gap-5">
      <h2
        className={`${subtitle({ afterContent: "primary", size: "large" })} text-textColor`}
      >
        Sobre <span className="text-primary">mim</span>
      </h2>

      <div className="flex flex-2 flex-col gap-5 md:flex-row md:flex-wrap">
        <p className={paragraph({ border: "basic" })}>
          Comecei minha jornada na programação em julho de 2023, focando em
          HTML, CSS, JavaScript e React JS. Desde então, tenho desenvolvido
          projetos pessoais e trabalhos freelancers para aprimorar minhas
          habilidades.
        </p>
        <p className={paragraph({ border: "basic" })}>
          A inclusão do TypeScript elevou a qualidade do meu código, reduzindo
          bugs e fortalecendo a segurança dos projetos. Minha estilização também
          melhorou com o TailwindCSS, e percebo que ainda tenho muito a aprender
          sobre essa ferramenta.
        </p>
        <p className={paragraph({ border: "basic" })}>
          Meu interesse em programação cresceu, motivado por usar tecnologias
          emergentes para resolver desafios e simplificar rotinas. Assim, para
          aprimorar minhas aplicações atualmente integro tecnologias de backend,
          como PostgreSQL, Docker, Node.js e muito mais.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <h2
          className={`${subtitle({
            afterContent: "secondary",
            size: "medium",
            h3: "basic",
          })} text-textColor`}
        >
          O que eu <span className="text-primary">faço</span>
        </h2>

        <div className="flex justify-between flex-wrap gap-5">
          <div className="flex-1 w-full flex items-center gap-5 min-w-[20rem] pb-5 md:min-w-[40rem] max-w-[50rem]">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-extraLarge text-primary"
            ></FontAwesomeIcon>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold capitalize text-small text-textColor">
                Desenvolvimento Frontend
              </h4>
              <p className="first-letter:capitalize text-small text-textColor">
                Crio designs responsivos e funcionalidades dinâmicas, com foco
                em React e NextJS com TypeScript.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-5 min-w-[20rem] pb-5 md:min-w-[40rem] md:max-w-[50rem]">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-extraLarge text-primary"
            ></FontAwesomeIcon>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold capitalize text-small text-textColor">
                Desenvolvimento Backend
              </h4>
              <p className="first-letter:capitalize text-small text-textColor">
                Crio API's com Node, junto de Fastify/ExpressJS, integrando a
                aplicações frontend à banco de dados, Requisições HTTP, ORM's e
                mais.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-5 min-w-[20rem] pb-5 md:min-w-[40rem] md:max-w-[50rem]">
            <FontAwesomeIcon
              icon={faFlask}
              className="text-extraLarge text-primary"
            ></FontAwesomeIcon>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold capitalize text-small text-textColor">
                Testes integrados
              </h4>
              <p className="first-letter:capitalize text-small text-textColor">
                Utilizo Vitest, React Testing Library e Jest para refinar o
                código, testando aplicações web e servidores, minimizando erros.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h2
          className={`${subtitle({
            afterContent: "secondary",
            size: "medium",
            h3: "basic",
          })} text-textColor`}
        >
          Baixe o meu <span className="text-primary">Currículo</span>
        </h2>

        <div className="flex gap-8 w-full justify-center flex-wrap md:gap-10">
          <button className={button({ withBackground: "primaryColor" })}>
            pt-BR
          </button>
          <button className={button({ withBackground: "primaryColor" })}>
            en-US
          </button>
        </div>
      </div>
    </section>
  );
};

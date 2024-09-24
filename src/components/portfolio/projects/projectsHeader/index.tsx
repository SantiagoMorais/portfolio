import { paragraph, subtitle } from "@styles/index";
import { projectRepository } from "utils/variables";

export const ProjectHeader = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <h2
        className={`text-textColor text-large ${subtitle({ afterContent: "primary" })}`}
      >
        Meus <span className="text-primary">Projetos</span>
      </h2>
      <p className={paragraph({ className: "text-small text-textColor" })}>
        Este porfólio foi desenvolvido utilizando React e TypeScript, aprimorado
        através da aplicação Vite. Para a requisição dos nossos posts do nosso
        blog, foi utilizado Hygraph e GraphQL. Finalmente, a estilização do
        projeto é de responsabilidade do TailwindCSS junto das bibliotecas
        auxiliares Tailwind Merge e Tailwind Variants.
      </p>
      <p className={paragraph({ className: "text-center text-small text-textColor" })}>
        Veja o repositório Github do projeto deste meu Portfólio Pessoal{" "}
        <a
          href={projectRepository}
          target="_blank"
          className="text-primary font-bold duration-300 hover:text-textColor hover:tracking-wider"
          style={{ filter: "drop-shadow(0 0 10px #19584f)" }}
        >
          Clicando Aqui! 
        </a>
      </p>
    </div>
  );
};

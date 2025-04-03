import { paragraph, subtitle } from "@styles/index";
import { projectRepository } from "utils/variables";

export const ProjectHeader = () => (
  <div className="flex w-full flex-col gap-5 px-5">
    <h2
      className={`text-large text-textColor ${subtitle({ afterContent: "primary" })}`}
    >
      Meus <span className="text-primary">Projetos</span>
    </h2>
    <p className={paragraph({ sections: "myProjects" })}>
      Este porfólio foi desenvolvido utilizando React e TypeScript, aprimorado
      através da aplicação Vite. Para a requisição dos nossos posts do nosso
      blog, foi utilizado Hygraph e GraphQL. Finalmente, a estilização do
      projeto é de responsabilidade do TailwindCSS junto das bibliotecas
      auxiliares Tailwind Merge e Tailwind Variants.
    </p>
    <p className={paragraph({ sections: "githubRepository" })}>
      Veja o repositório Github do projeto deste meu Portfólio Pessoal{" "}
      <a
        href={projectRepository}
        target="_blank"
        className="text-primary hover:text-textColor font-bold duration-300 hover:tracking-wider"
        style={{ filter: "drop-shadow(0 0 10px #19584f)" }}
      >
        Clicando Aqui!
      </a>
    </p>
  </div>
);

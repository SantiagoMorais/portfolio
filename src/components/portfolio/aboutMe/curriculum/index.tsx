import { button, subtitle } from "@styles/index";
import curriculumPT from "@docs/Currículo atualizado em português 2024-Set.pdf";
import curriculumEN from "@docs/Currículo atualizado em inglês 2024-Set.pdf";

export const Curriculum = () => {
  return (
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
        <a
          className={button({ withBackground: "primaryColor", className: "text-textColor" })}
          href={curriculumPT}
          download="Curriculum Vitae pt-BR - Felipe Santiago Morais"
        >
          pt-BR
        </a>
        <a
          className={button({ withBackground: "primaryColor", className: "text-textColor" })}
          href={curriculumEN}
          download="Curriculum Vitae eu-EN - Felipe Santiago Morais"
        >
          en-US
        </a>
      </div>
    </div>
  );
};
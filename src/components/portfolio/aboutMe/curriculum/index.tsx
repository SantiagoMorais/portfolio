import { button, subtitle } from "@/styles/index";
import curriculumPT from "@/docs/Currículo atualizado em português.pdf";
import curriculumEN from "@/docs/Currículo atualizado em inglês.pdf";

export const Curriculum = () => (
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
    <div className="flex w-full flex-wrap justify-center gap-8 md:gap-10">
      <a
        className={button({
          withBackground: "primaryColor",
          className: "text-white",
        })}
        href={curriculumPT}
        download="Curriculum Vitae pt-BR - Felipe Santiago Morais"
      >
        pt-BR
      </a>
      <a
        className={button({
          withBackground: "primaryColor",
          className: "text-white",
        })}
        href={curriculumEN}
        download="Curriculum Vitae eu-EN - Felipe Santiago Morais"
      >
        en-US
      </a>
    </div>
  </div>
);

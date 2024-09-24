import {
  faDatabase,
  faFlask,
  faLaptopCode,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { subtitle } from "@styles/index";
import { createId } from "@paralleldrive/cuid2";

export const WhatIDo = () => {
  const list: {
    title: string;
    icon: IconDefinition;
    text: string;
    id: string;
  }[] = [
    {
      title: "Desenvolvimento Frontend",
      icon: faLaptopCode,
      text: "Crio designs responsivos e funcionalidades dinâmicas, com foco em React e NextJS com TypeScript.",
      id: createId(),
    },
    {
      title: "Desenvolvimento Backend",
      icon: faDatabase,
      text: "Crio API's com Node, junto de Fastify/ExpressJS, integrando aplicações frontend a banco de dados, requisições HTTP, ORM's e mais.",
      id: createId(),
    },
    {
      title: "Testes integrados",
      icon: faFlask,
      text: "Utilizo Vitest, React Testing Library e Jest para refinar o código, testando aplicações web e servidores, minimizando erros.",
      id: createId(),
    },
  ];

  return (
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
        {list.map((item) => (
          <div
            key={item.id}
            className="flex-1 w-full flex items-center gap-5 min-w-[20rem] pb-5 md:min-w-[40rem] max-w-[50rem]"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-extraLarge text-primary"
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-bold capitalize text-small text-textColor">
                {item.title}
              </h4>
              <p className="first-letter:capitalize text-small text-textColor">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

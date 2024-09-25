import {
  faDatabase,
  faFlask,
  faLaptopCode,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { createId } from "@paralleldrive/cuid2";

export const whatIDoList: {
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

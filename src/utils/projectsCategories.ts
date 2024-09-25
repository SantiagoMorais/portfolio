import { createId } from "@paralleldrive/cuid2";

export type TCategory =
  | "portfolio"
  | "typescript"
  | "react"
  | "tests"
  | "context-api"
  | "javascript"
  | "react-testing-library"
  | "html5"
  | "css3"
  | "redux"
  | "tailwindcss"
  | "nodejs";

  

export const categoryList: { name: string; topic: TCategory; id: string }[] = [
  { name: "Ver todos", topic: "portfolio", id: createId() },
  { name: "React", topic: "react", id: createId() },
  { name: "TypeScript", topic: "typescript", id: createId() },
  { name: "Context API", topic: "context-api", id: createId() },
  { name: "Redux", topic: "redux", id: createId() },
  { name: "Tailwind CSS", topic: "tailwindcss", id: createId() },
  { name: "Node JS", topic: "nodejs", id: createId() },
];

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
  { name: "Principais", topic: "portfolio", id: createId() },
  { name: "React", topic: "react", id: createId() },
  { name: "Node JS", topic: "nodejs", id: createId() },
  { name: "Tailwind CSS", topic: "tailwindcss", id: createId() },
  { name: "TypeScript", topic: "typescript", id: createId() },
  { name: "Javascript", topic: "javascript", id: createId() },
  { name: "Redux", topic: "redux", id: createId() },
];

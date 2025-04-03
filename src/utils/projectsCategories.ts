import { TCategories } from "@/core/types/categories";
import { createId } from "@paralleldrive/cuid2";

export const categoryList: { name: string; topic: TCategories; id: string }[] =
  [
    { name: "Principais", topic: "portfolio", id: createId() },
    { name: "React", topic: "react", id: createId() },
    { name: "Node JS", topic: "nodejs", id: createId() },
    { name: "Tailwind CSS", topic: "tailwindcss", id: createId() },
    { name: "TypeScript", topic: "typescript", id: createId() },
    { name: "Javascript", topic: "javascript", id: createId() },
    { name: "Redux", topic: "redux", id: createId() },
  ];

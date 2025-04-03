import { TCategories } from "@/core/types/categories";
import { createId } from "@paralleldrive/cuid2";

export const categoryList: { name: string; topic: TCategories; id: string }[] =
  [
    { name: "Principais", topic: "portfolio", id: createId() },
    { name: "Next", topic: "nextjs", id: createId() },
    { name: "React", topic: "react", id: createId() },
    { name: "Node JS", topic: "nodejs", id: createId() },
    { name: "React Native", topic: "react-native", id: createId() },
  ];

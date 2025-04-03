import { TCategories } from "@/core/types/categories";

export interface ICategoryItemProps {
  category: {
    name: string;
    topic: TCategories;
  };
  handleCategory: (topic: TCategories) => void;
  currentCategory: string;
}

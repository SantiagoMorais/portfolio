import { button } from "@styles/index";
import { TCategory } from "utils/projectsCategories";

type CategoryItemProps = {
  category: {
    name: string;
    topic: TCategory;
    id: string;
  };
  handleCategory: (topic: TCategory) => void;
  currentCategory: string;
};

export const CategoryItem = ({
  category,
  handleCategory,
  currentCategory,
}: CategoryItemProps) => {
  return (
    <li key={category.id} className="flex-1 min-w-fit max-w-80">
      <button
        onClick={() => handleCategory(category.topic)}
        className={`${button({ withBackground: "secondaryColor" })} ${category.topic === currentCategory ? "bg-hoverEffect text-primary" : "bg-primary text-textColor"}`}
      >
        {category.name}
      </button>
    </li>
  );
};

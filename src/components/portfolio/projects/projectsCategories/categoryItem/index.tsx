import { ICategoryItemProps } from "@core/interfaces/category-item-props";
import { button } from "@styles/index";

export const CategoryItem = ({
  category,
  handleCategory,
  currentCategory,
}: ICategoryItemProps) => (
  <li key={category.id} className="min-w-fit max-w-80 flex-1">
    <button
      onClick={() => handleCategory(category.topic)}
      className={`${button({ withBackground: "secondaryColor" })} ${category.topic === currentCategory ? "bg-hoverEffect text-primary" : "bg-primary text-textColor"}`}
    >
      {category.name}
    </button>
  </li>
);

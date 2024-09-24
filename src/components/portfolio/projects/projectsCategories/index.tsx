import { button, subtitle } from "@styles/index";
import { useState } from "react";
import { categoryList, TCategory } from "utils/projectsCategories";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import { ProjectsList } from "../projectsList";

export const ProjectsCategories = () => {
  const [currentCategory, setCurrentCategory] =
    useState<TCategory>("portfolio");
  const data = useGitHubAutomatedRepos("SantiagoMorais", currentCategory);
  const handleCategory = (category: TCategory) => {
    setCurrentCategory(category);
  };

  return (
    <div className="flex flex-col gap-5">
      <h3
        className={`${subtitle({ h3: "basic", afterContent: "secondary" })} text-textColor text-medium`}
      >
        Veja <span className="text-primary">mais projetos</span> abaixo:
      </h3>
      <ul className="flex flex-wrap gap-5 w-full items-center mb-5 justify-center">
        {categoryList.map((category) => (
          <li key={category.id} className="flex-1 min-w-fit max-w-80">
            <button
              onClick={() => handleCategory(category.topic)}
              className={`${button({ withBackground: "secondaryColor" })} ${category.topic === currentCategory ? "bg-hoverEffect text-primary" : "bg-primary text-textColor"}`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <ProjectsList data={data}/>
    </div>
  );
};

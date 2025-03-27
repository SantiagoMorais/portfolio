import { subtitle } from "@styles/index";
import { useState } from "react";
import { categoryList, TCategory } from "utils/projectsCategories";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import { ProjectsList } from "../projectsList";
import { CategoryItem } from "./categoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const ProjectsCategories = () => {
  const [currentCategory, setCurrentCategory] =
    useState<TCategory>("portfolio");

  const { data, isLoading, isLoadingError } = useGitHubAutomatedRepos(
    "SantiagoMorais",
    currentCategory
  );

  const handleCategory = (category: TCategory) => setCurrentCategory(category);

  const content = () => {
    if (isLoading)
      return (
        <p className="flex items-center justify-center gap-2 text-center text-textColor">
          Carregando...{" "}
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </p>
      );
    if (isLoadingError)
      return (
        <p className="flex items-center justify-center gap-2 text-center text-textColor">
          Não foi possível carregar os dados{" "}
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </p>
      );
    return <ProjectsList data={data} />;
  };

  return (
    <div className="flex flex-col gap-5">
      <h3
        className={`${subtitle({ h3: "basic", afterContent: "secondary" })} text-medium text-textColor`}
      >
        Veja <span className="text-primary">mais projetos</span> abaixo:
      </h3>
      <ul className="mb-5 flex w-full flex-wrap items-center justify-center gap-5">
        {categoryList.map((category) => (
          <CategoryItem
            category={category}
            handleCategory={handleCategory}
            key={category.id}
            currentCategory={currentCategory}
          />
        ))}
      </ul>
      {content()}
    </div>
  );
};

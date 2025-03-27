import { subtitle } from "@styles/index";
import { useState } from "react";
import { categoryList, TCategory } from "utils/projectsCategories";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import { ProjectsList } from "../projectsList";
import { CategoryItem } from "./categoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export const ProjectsCategories = () => {
  const [currentCategory, setCurrentCategory] =
    useState<TCategory>("portfolio");
  
  const { data ,isLoading, isLoadingError } = useGitHubAutomatedRepos("SantiagoMorais", "react");

  const handleCategory = (category: TCategory) => setCurrentCategory(category);

  console.log(data);

  const content = () => {
    if (isLoading) return <p className="text-textColor justify-center text-center flex items-center gap-2">Carregando... <FontAwesomeIcon icon={faSpinner} className="animate-spin" /></p>
    if (isLoadingError) return <p className="text-textColor justify-center text-center flex items-center gap-2">Não foi possível carregar os dados <FontAwesomeIcon icon={faTriangleExclamation} /></p>
    return <ProjectsList data={data} />
  }
  

  return (
    <div className="flex flex-col gap-5">
      <h3
        className={`${subtitle({ h3: "basic", afterContent: "secondary" })} text-textColor text-medium`}
      >
        Veja <span className="text-primary">mais projetos</span> abaixo:
      </h3>
      <ul className="flex flex-wrap gap-5 w-full items-center mb-5 justify-center">
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

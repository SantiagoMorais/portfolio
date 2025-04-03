import { IPortfoliosConnection } from "@/core/interfaces/portfolio-query-interfaces";
import { TCategories } from "@/core/types/categories";
import { GET_PORTFOLIO_BY_TOPICS } from "@/db/get-portfolio-by-topics";
import { subtitle } from "@/styles/index";
import { categoryList } from "@/utils/projectsCategories";
import { useQuery } from "@apollo/client";
import {
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ProjectsList } from "../projectsList";
import { CategoryItem } from "./categoryItem";

export const ProjectsCategories = () => {
  const [currentCategory, setCurrentCategory] =
    useState<TCategories>("portfolio");

  const { loading, error, data } = useQuery<IPortfoliosConnection>(
    GET_PORTFOLIO_BY_TOPICS,
    {
      variables: {
        topic: [currentCategory],
      },
    }
  );

  const handleCategory = (category: TCategories) =>
    setCurrentCategory(category);

  const content = () => {
    if (loading)
      return (
        <p className="text-textColor flex items-center justify-center gap-2 text-center text-base">
          Carregando...{" "}
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </p>
      );
    if (error || !data)
      return (
        <p className="text-textColor flex items-center justify-center gap-2 text-center text-base">
          Não foi possível carregar os dados{" "}
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </p>
      );

    return <ProjectsList edges={data.portfoliosConnection.edges} />;
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
            key={category.name}
            currentCategory={currentCategory}
          />
        ))}
      </ul>
      {content()}
    </div>
  );
};

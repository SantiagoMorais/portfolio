import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { PolygonEmoji } from "@components/ui/polygonEmoji";

type PostNotFoundProps = {
  searchType: "searchingByFilter" | "searchingByTitle";
};

export const PostsNotFound = ({ searchType }: PostNotFoundProps) => {
  const { postTitle } = useSearchPostByTitle();
  const { filter } = useFilterPosts();

  return (
    <div className="flex flex-col items-center gap-5 px-5 py-14">
      <h3 className="text-center text-medium font-medium text-textColor">
        {searchType === "searchingByTitle" ? (
          <>
            Posts com o título{" "}
            <span className="text-primary">"{postTitle}"</span> não encontrados.
          </>
        ) : searchType === "searchingByFilter" ? (
          <>
            Posts com o filtro <span className="text-primary">"{filter}"</span>{" "}
            não encontrados.
          </>
        ) : (
          <>O conteúdo que você procura não pôde ser encontrado</>
        )}
      </h3>
      <PolygonEmoji icon={faMagnifyingGlass} />
    </div>
  );
};

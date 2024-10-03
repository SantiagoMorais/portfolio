import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vector from "@assets/vector.png";
import { useFilterPosts } from "@contexts/filterPostsContext";

type PostNotFoundProps = {
  searchType: "searchingByFilter" | "searchingByTitle"
};

export const PostsNotFound = ({ searchType }: PostNotFoundProps) => {
  const { postTitle } = useSearchPostByTitle();
  const { filter } = useFilterPosts();

  return (
    <div className="px-5 py-14 flex flex-col gap-5 items-center">
      <h3 className="text-center font-medium text-textColor text-medium">
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
      <div
        className="max-w-[60rem] max-h-[60rem] size-contain p-28 flex justify-center items-center"
        style={{
          background: `url(${vector}) no-repeat center center`,
          backgroundSize: "contain",
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="size-2/3 text-textColor"
        />
      </div>
    </div>
  );
};

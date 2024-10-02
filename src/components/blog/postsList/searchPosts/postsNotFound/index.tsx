import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vector from "@assets/vector.png";


export const PostsNotFound = () => {
  const { postTitle } = useSearchPostByTitle();

  return (
    <div className="px-5 py-14 flex flex-col gap-5 items-center">
      <h3 className="text-center font-medium text-textColor text-medium">
        Posts com o título <span className="text-primary">"{postTitle}"</span> não encontrados.
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

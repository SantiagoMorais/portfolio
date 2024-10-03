import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPostsData } from "@utils/types";
import { Link } from "react-router-dom";

type PostsListProps = {
  data: IPostsData | undefined;
};

export const PostsList: React.FC<PostsListProps> = ({ data }) => {
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 pb-16 pt-10 md:px-10 md:pb-20 gap-8">
      {data?.postsConnection.edges.map((post) => (
        <Link
          key={post.node.id}
          to={`/blog/${post.node.id}`}
          className="bg-secondaryPanel flex-1 w-full h-auto rounded-md border-2 border-primary overflow-hidden flex flex-col duration-300 hover:shadow-secondary hover:shadow-allAround hover:opacity-60 hover:scale-[98%]"
        >
          <img
            src={post.node.image.url}
            alt="Imagem do artigo"
            className="w-full h-[25rem] md:h-[30rem] object-cover object-center border-b-2 border-primary"
          />
          <div className="px-5 py-4 md:px-10 md:py-5 flex flex-col w-full border-b border-secondary">
            <h3 className="first-letter:capitalize text-base text-primary font-bold">
              {post.node.title}
            </h3>
            {post.node.subtitle && (
              <h4 className="first-letter:capitalize text-textColor text-small mb-10">
                {post.node.subtitle}
              </h4>
            )}
            <div className="flex justify-center">
              <p className="text-small text=cemter text-white uppercase transition-opacity inline-block font-medium bg-secondary rounded-full px-5 py-2 text-center">
                Ler publicação{" "}
                <FontAwesomeIcon
                  icon={faHandPointer}
                  className="sm:inline hidden"
                />
              </p>
            </div>
          </div>
          <div className="px-5 py-2 md:px-10 md:py-5 flex justify-center">
            <h4 className="bg-panel rounded-full w-fit px-8 py-2 capitalize text-primary text-small font-medium text-center">
              <span className="text-textColor">Por: </span>{" "}
              {post.node.author.name}
            </h4>
          </div>
        </Link>
      ))}
    </ul>
  );
};

import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPostsData } from "@utils/types";
import { Link } from "react-router-dom";

export const PostsCards = ({ data }: { data: IPostsData | undefined }) => (
  <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {data?.postsConnection.edges.map((post) => (
      <Link
        key={post.node.id}
        to={`/blog/${post.node.id}`}
        className="flex h-auto w-full flex-1 flex-col overflow-hidden rounded-md border-2 border-primary bg-secondaryPanel duration-300 hover:scale-[98%] hover:opacity-60 hover:shadow-allAround hover:shadow-secondary"
      >
        <img
          src={post.node.image.url}
          alt="Imagem do artigo"
          className="h-[25rem] w-full border-b-2 border-primary object-cover object-center md:h-[30rem]"
        />
        <div className="flex w-full flex-1 flex-col justify-between border-b border-secondary px-5 py-4 md:px-10 md:py-5">
          <div className="flex w-full flex-col">
            <h3 className="text-base font-bold text-primary first-letter:capitalize">
              {post.node.title}
            </h3>
            {post.node.subtitle && (
              <h4 className="mb-10 text-small text-textColor first-letter:capitalize">
                {post.node.subtitle}
              </h4>
            )}
          </div>
          <div className="flex justify-center">
            <p className="text=cemter inline-block rounded-full bg-secondary px-5 py-2 text-center text-small font-medium uppercase text-white transition-opacity">
              Ler publicação{" "}
              <FontAwesomeIcon
                icon={faHandPointer}
                className="hidden sm:inline"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center px-5 py-2 md:px-10 md:py-5">
          <h4 className="w-fit rounded-full bg-panel px-8 py-2 text-center text-small font-medium capitalize text-primary">
            <span className="text-textColor">Por: </span>{" "}
            {post.node.author.name}
          </h4>
        </div>
      </Link>
    ))}
  </div>
);

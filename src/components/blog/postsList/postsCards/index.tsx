import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPostsData } from "@core/interfaces/query-interfaces";
import { Link } from "react-router-dom";

export const PostsCards = ({ data }: { data: IPostsData | undefined }) => (
  <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {data?.postsConnection.edges.map((post) => (
      <Link
        key={post.node.id}
        to={`/blog/${post.node.id}`}
        className="border-primary bg-secondaryPanel hover:shadow-allAround hover:shadow-secondary flex h-auto w-full flex-1 flex-col overflow-hidden rounded-md border-2 duration-300 hover:scale-[98%] hover:opacity-60"
      >
        <img
          src={post.node.image.url}
          alt="Imagem do artigo"
          className="border-primary h-[25rem] w-full border-b-2 object-cover object-center md:h-[30rem]"
        />
        <div className="border-secondary flex w-full flex-1 flex-col justify-between border-b px-5 py-4 md:px-10 md:py-5">
          <div className="flex w-full flex-col">
            <h3 className="text-primary text-base font-bold first-letter:capitalize">
              {post.node.title}
            </h3>
            {post.node.subtitle && (
              <h4 className="text-small text-textColor mb-10 first-letter:capitalize">
                {post.node.subtitle}
              </h4>
            )}
          </div>
          <div className="flex justify-center">
            <p className="text=cemter bg-secondary text-small inline-block rounded-full px-5 py-2 text-center font-medium text-white uppercase transition-opacity">
              Ler publicação{" "}
              <FontAwesomeIcon
                icon={faHandPointer}
                className="hidden sm:inline"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center px-5 py-2 md:px-10 md:py-5">
          <h4 className="bg-panel text-small text-primary w-fit rounded-full px-8 py-2 text-center font-medium capitalize">
            <span className="text-textColor">Por: </span>{" "}
            {post.node.author.name}
          </h4>
        </div>
      </Link>
    ))}
  </div>
);

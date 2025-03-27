import { SocialMediaLinks } from "@components/portfolio/hero/heroDescription/socialMediaLinks";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { createId } from "@paralleldrive/cuid2";
import { IAuthorInfo } from "@utils/types";

type PostAuthorProps = {
  data: IAuthorInfo | undefined;
};

export const PostAuthor: React.FC<PostAuthorProps> = ({ data }) => (
  <>
    {data && (
      <div className="relative flex w-full flex-col items-center gap-6 from-transparent via-primary to-transparent px-5 pt-10 before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:bg-gradient-to-r sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 sm:px-20">
        <img
          src={data.avatar.url}
          alt={`Avatar do autor ${data.name}`}
          className="size-[60dvw] rounded-full border-2 border-secondary shadow-allAround shadow-secondary sm:size-[25rem]"
        />
        <div className="flex flex-col items-center gap-5 sm:w-full sm:max-w-[60rem] sm:items-start">
          <h4 className="$ text-center text-medium font-medium capitalize text-textColor">
            <span className="text-primary first-letter:uppercase">Autor:</span>{" "}
            {data.name}
          </h4>
          <p className="w-full rounded-xl bg-secondaryPanel px-5 py-2 text-small text-textColor first-letter:uppercase">
            {data.description}
          </p>
          <div className="sm:w- flex flex-col items-center gap-2">
            <p className="text-center font-medium text-textColor first-letter:capitalize sm:hidden">
              {data.github
                ? !data.linkedin
                  ? "Acesse meu Github:"
                  : "Acesse minhas redes:"
                : data.linkedin && "Acesse meu Linkedin:"}
            </p>
            <ul className="flex flex-wrap gap-2">
              {data.linkedin && (
                <SocialMediaLinks
                  socialMedia={{
                    icon: faLinkedin,
                    id: createId(),
                    link: data.linkedin,
                    title: "Linkedin",
                  }}
                />
              )}
              {data.github && (
                <SocialMediaLinks
                  socialMedia={{
                    icon: faGithub,
                    id: createId(),
                    link: data.github,
                    title: "Linkedin",
                  }}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    )}
  </>
);

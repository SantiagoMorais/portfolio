import { SocialMediaLinks } from "@components/portfolio/hero/heroDescription/socialMediaLinks";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { createId } from "@paralleldrive/cuid2";
import { subtitle } from "@styles/index";
import { IAuthorInfo } from "@utils/types";

type PostAuthorProps = {
  data: IAuthorInfo | undefined;
};

export const PostAuthor: React.FC<PostAuthorProps> = ({ data }) => {
  console.log(data);

  return (
    data && (
      <div className="flex flex-col gap-6 w-full px-5 items-center sm:flex-row sm:px-20 sm:justify-center sm:gap-10 sm:flex-wrap pt-10 relative before:absolute before:w-full before:h-[2px] before:bg-gradient-to-r from-transparent via-primary to-transparent before:top-0 before:left-0">
        <img
          src={data.avatar.url}
          alt={`Avatar do autor ${data.name}`}
          className="size-[60dvw] rounded-full border-2 border-secondary shadow-allAround shadow-secondary sm:size-[25rem]"
        />
        <div className="flex flex-col items-center gap-5 sm:items-start sm:w-full sm:max-w-[60rem]">
          <h4 className="text-medium text-center capitalize text-textColor font-medium $">
            <span className="first-letter:uppercase text-primary">Autor:</span>{" "}
            {data.name}
          </h4>
          <p className="px-5 py-2 bg-secondaryPanel rounded-xl text-textColor first-letter:uppercase text-small w-full">
            {data.description}
          </p>

          <div className="flex flex-col items-center gap-2 sm:w-">
            <p className="font-medium text-textColor first-letter:capitalize text-center sm:hidden">
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
    )
  );
}
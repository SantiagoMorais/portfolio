import { SocialLink } from "./link";
import { twMerge } from "tailwind-merge";
import { SocialMediaType } from "@utils/socialMediaLinks";

type SocialMediaLinksProps = {
  className?: string;
  socialMedia: SocialMediaType[] | SocialMediaType;
};

export const SocialMediaLinks = ({
  className,
  socialMedia,
}: SocialMediaLinksProps) => {
  const isArray = Array.isArray(socialMedia);

  return (
    <>
      {isArray ? (
        <div
          className={twMerge(
            "flex gap-5 mt-5 items-center flex-wrap",
            className
          )}
        >
          <p className="text-textColor mr-5 text-small text-center transition-colors duration-150 md:text-base">
            Cheque minhas redes:
          </p>
          <ul className="flex gap-2 items-center flex-wrap md:gap-5">
            {(socialMedia as SocialMediaType[]).map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </ul>
        </div>
      ) : (
        <SocialLink link={socialMedia as SocialMediaType} />
      )}
    </>
  );
};

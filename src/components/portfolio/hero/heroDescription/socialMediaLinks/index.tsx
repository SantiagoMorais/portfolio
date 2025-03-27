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
            "mt-5 flex flex-wrap items-center gap-5",
            className
          )}
        >
          <p className="mr-5 text-center text-small text-textColor transition-colors duration-150 md:text-base">
            Cheque minhas redes:
          </p>
          <ul className="flex flex-wrap items-center gap-2 md:gap-5">
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

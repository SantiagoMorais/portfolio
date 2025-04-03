import { ISocialMediaLinksProps } from "@core/interfaces/social-media-links-props";
import { SocialLink } from "./link";
import { twMerge } from "tailwind-merge";
import { ISocialMedia } from "@core/interfaces/social-media";

export const SocialMediaLinks = ({
  className,
  socialMedia,
}: ISocialMediaLinksProps) => {
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
            {(socialMedia as ISocialMedia[]).map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </ul>
        </div>
      ) : (
        <SocialLink link={socialMedia as ISocialMedia} />
      )}
    </>
  );
};

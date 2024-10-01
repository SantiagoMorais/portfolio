import { Link } from "./link";
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
          <ul className="flex gap-2 items-center flex-wrap md:gap-5">
            {(socialMedia as SocialMediaType[]).map((link) => (
              <Link key={link.id} link={link} />
            ))}
          </ul>
        </div>
      ) : (
        <Link link={socialMedia as SocialMediaType} />
      )}
    </>
  );
};

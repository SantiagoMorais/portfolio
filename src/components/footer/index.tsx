import { Logo } from "@components/navbar/logo";
import { MenuItem } from "@components/navbar/menuItem";
import { SocialMediaLinks } from "@components/portfolio/hero/heroDescription/socialMediaLinks";
import { navbar } from "@json/data.json";
import { socialMedia } from "@utils/socialMediaLinks";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex p-10 items-center bg-secondaryPanel flex-col md:flex-row md:justify-between gap-4 mt-auto">
      <Link
        to="/"
        className="duration-300 hover:opacity-70 hover:scale-110 cursor-pointer"
      >
        <Logo
          className="text-extraLarge first-letter:text-giant"
          iconSize="size-16"
          padding="md:p-10"
        />
      </Link>
      <SocialMediaLinks
        socialMedia={socialMedia}
        className="justify-center mb-10 flex-col"
      />
      <ul className="rounded-lg border w-full border-primary py-5 flex flex-col items-center md:w-fit md:items-end md:px-5 bg-panel">
        {navbar.map((item) => (
          <MenuItem key={item.id} navbarInfo={item} />
        ))}
      </ul>
    </footer>
  );
};

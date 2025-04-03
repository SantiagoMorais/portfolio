import { Logo } from "@components/ui/logo";
import { MenuItem } from "@components/navbar/menuItem";
import { SocialMediaLinks } from "@components/portfolio/hero/heroDescription/socialMediaLinks";
import { navbar } from "@json/data.json";
import { socialMedia } from "@utils/socialMediaLinks";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-secondaryPanel mt-auto flex flex-col items-center gap-4 p-10 md:flex-row md:justify-between">
    <Link
      to="/"
      className="cursor-pointer duration-300 hover:scale-110 hover:opacity-70"
    >
      <Logo
        className="text-extraLarge first-letter:text-giant"
        iconSize="size-16"
        padding="md:p-10"
      />
    </Link>
    <SocialMediaLinks
      socialMedia={socialMedia}
      className="mb-10 flex-col justify-center"
    />
    <ul className="border-primary bg-panel flex w-full flex-col items-center rounded-lg border py-5 md:w-fit md:items-end md:px-5">
      {navbar.map((item) => (
        <MenuItem key={item.id} navbarInfo={item} />
      ))}
    </ul>
  </footer>
);

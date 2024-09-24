import { Logo } from "@components/navbar/logo";
import { SocialMediaLinks } from "@components/portfolio/hero/heroDescription/socialMediaLinks";
import { navbar } from "@json/data.json";
import { button } from "@styles/index";

export const Footer = () => {
  return (
    <footer className="flex p-10 items-center bg-secondaryPanel flex-col md:flex-row md:justify-between gap-4 mt-auto">
        <Logo className="text-extraLarge first-letter:text-giant" iconSize="size-16" padding="md:p-10"/>
      <SocialMediaLinks className="justify-center mb-10 flex-col" />
      <ul className="rounded-lg border w-full border-primary py-5 flex flex-col items-center md:w-fit md:items-end md:px-5">
        {navbar.map((item) => (
          <li key={item.id} className="w-min">
            <a href="" className={button({ afterHover: "primary" })}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

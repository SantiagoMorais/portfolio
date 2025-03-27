import { Logo } from "@components/ui/logo";

interface IBannerDescriptionProps {
  title: string;
  subtitle: string;
}

export const BannerDescription = ({
  subtitle,
  title,
}: IBannerDescriptionProps) => (
  <div className="z-20 flex h-fit w-full flex-col items-center justify-center p-10 py-20 sm:h-[30dvw]">
    <h2 className="mb-5 text-large font-extrabold uppercase tracking-widest text-white sm:text-[3.2dvw]">
      {title}
    </h2>
    <div className="mb-8 flex size-[12rem] items-center justify-start rounded-full border-2 border-white bg-[rgba(0,0,0,.4)] p-10 shadow-allAround shadow-white sm:size-[12dvw] sm:justify-center sm:border-[.2dvw]">
      <Logo
        className="text-large text-white first-letter:text-extraLarge sm:text-[2.8dvw] sm:first-letter:text-[4dvw]"
        iconSize="size-large sm:size-[2.8dvw] text-white"
      />
    </div>
    <h3 className="mb-2 text-center text-medium font-bold leading-tight text-white sm:text-[1.6dvw]">
      Felipe Santiago <span className="text-primary">Desenvolvedor Web</span>
    </h3>
    <h3 className="text-center text-small font-normal text-white sm:text-[1.15dvw]">
      {subtitle}
    </h3>
  </div>
);

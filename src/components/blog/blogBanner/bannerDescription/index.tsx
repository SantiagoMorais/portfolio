import { Logo } from "@components/ui/logo";

export const BannerDescription = () => {
  return (
    <div className="w-full h-fit z-20 flex flex-col justify-center items-center p-10 py-20 sm:h-[30dvw]">
      <h2 className="text-white text-large uppercase font-extrabold tracking-widest mb-5 sm:text-[3.2dvw]">
        Blog
      </h2>

      <div className="border-2 sm:border-[.2dvw] shadow-allAround shadow-white bg-[rgba(0,0,0,.4)] size-[12rem] sm:size-[12dvw] border-white rounded-full p-10 flex items-center justify-start mb-8 sm:justify-center">
        <Logo
          className="text-large first-letter:text-extraLarge text-white sm:text-[2.8dvw] sm:first-letter:text-[4dvw]"
          iconSize="size-large sm:size-[2.8dvw] text-white"
        />
      </div>

      <h3 className="mb-2 text-center leading-tight text-white text-medium font-bold sm:text-[1.6dvw]">
        Felipe Santiago <span className="text-primary">Desenvolvedor Web</span>
      </h3>
      <h3 className="text-small text-center text-white font-normal sm:text-[1.15dvw]">
        Acesse conteúdos essenciais sobre desenvolvimento web e programação.
      </h3>
    </div>
  );
};

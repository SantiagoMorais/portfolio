import heroImage from "@assets/hero-image.png";
import { HeroDescription } from "./heroDescription";

export const Hero = () => {
  return (
    <section className="flex flex-col px-8 pb-16 gap-16 md:flex-row-reverse md:items-center md:px-20 md:pb-16">
      <div className="flex-1 flex justify-center">
        <img
          src={heroImage}
          alt="Imagem principal"
          className="max-w-[60rem] w-full"
          style={{ filter: "drop-shadow(0 15px 10px #19584F)" }}
        />
      </div>

      <HeroDescription />
    </section>
  );
};
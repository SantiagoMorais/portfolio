import heroImage from "@/assets/imgs/hero-image.png";
import { HeroDescription } from "./heroDescription";

export const Hero = () => (
  <section className="flex flex-col gap-16 px-5 pb-16 md:flex-row-reverse md:items-center md:px-20 md:pb-16">
    <div className="flex flex-1 justify-center">
      <img
        src={heroImage}
        alt="Imagem principal"
        className="w-full max-w-[60rem]"
        style={{ filter: "drop-shadow(0 15px 10px #19584F)" }}
      />
    </div>
    <HeroDescription />
  </section>
);

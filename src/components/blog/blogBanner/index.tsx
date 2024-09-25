import { BannerCaroulselSlides } from "utils/lists";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Logo } from "@components/navbar/logo";

export const BlogBanner = () => {
  return (
    <Swiper
      className="w-full h-[40rem] md:h-[60rem] relative border-t-2 border-b-2 border-secondary overflow-y-auto shadow-allAround shadow-secondary"
      modules={[Autoplay]}
      autoplay={{ disableOnInteraction: false, delay: 5000 }}
      loop={true}
      allowTouchMove={false}
    >
      <div className="absolute top-0 left-0 size-full bg-[rgba(0,0,0,.6)] z-10"></div>

      <div className="absolute top-0 left-0 z-20 size-full flex justify-center items-center flex-col">
        <h2 className="text-white text-giant uppercase font-extrabold tracking-widest mb-5">
          Blog
        </h2>

        <div className="border-2 shadow-allAround shadow-white bg-[rgba(0,0,0,.4)] size-64 border-white rounded-full p-10 flex items-center justify-start mb-8">
          <Logo
            className="text-extraLarge first-letter:text-giant text-white"
            iconSize="size-16 text-white"
          />
        </div>

        <h3 className="text-white text-large font-bold">
          Felipe Santiago - <span className="text-primary">Desenvolvedor Web</span>
        </h3>
        <h3 className="text-base text-white font-normal">
          Acesse conteúdos essenciais sobre desenvolvimento web e programação.
        </h3>
      </div>

      {BannerCaroulselSlides.map((slide) => (
        <SwiperSlide className="size-full">
          <img
            src={slide}
            alt="Imagem blog"
            className="size-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

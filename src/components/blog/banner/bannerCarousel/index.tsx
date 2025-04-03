import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const BannerCarousel = ({ imagesList }: { imagesList: string[] }) => (
  <section className="absolute top-0 left-0 flex size-full items-center overflow-hidden">
    <Swiper
      className="border-secondary shadow-allAround shadow-secondary size-full border-t-2 border-b-2"
      modules={[Autoplay]}
      autoplay={{ disableOnInteraction: false, delay: 5000 }}
      loop={true}
      allowTouchMove={false}
    >
      <div className="absolute top-0 left-0 z-10 size-full bg-black/60"></div>
      {imagesList.map((slide) => (
        <SwiperSlide key={slide} className="size-full">
          <img
            src={slide}
            alt="Imagem blog"
            className="size-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

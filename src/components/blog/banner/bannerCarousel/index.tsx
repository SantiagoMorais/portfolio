import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const BannerCarousel = ({ imagesList }: { imagesList: string[] }) => (
  <section className="absolute size-full left-0 top-0 overflow-hidden flex items-center">
  <Swiper
    className="border-b-2 border-t-2 size-full border-secondary shadow-allAround shadow-secondary"
    modules={[Autoplay]}
    autoplay={{ disableOnInteraction: false, delay: 5000 }}
    loop={true}
    allowTouchMove={false}
    >
    <div className="absolute left-0 top-0 z-10 size-full bg-black/60"></div>
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

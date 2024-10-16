import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IBannerCarouselProps {
  imagesList: string[];
}

export const BannerCarousel = ({ imagesList }: IBannerCarouselProps) => {
  return (
    <Swiper
      className="size-full z-10 absolute top-0 left-0 border-t-2 border-b-2 border-secondary overflow-hidden shadow-allAround shadow-secondary"
      modules={[Autoplay]}
      autoplay={{ disableOnInteraction: false, delay: 5000 }}
      loop={true}
      allowTouchMove={false}
    >
      <div className="absolute top-0 left-0 size-full bg-[rgba(0,0,0,.6)] z-10"></div>

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
  );
};

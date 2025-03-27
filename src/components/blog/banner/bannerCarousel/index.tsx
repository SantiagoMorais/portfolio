import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IBannerCarouselProps {
  imagesList: string[];
}

export const BannerCarousel = ({ imagesList }: IBannerCarouselProps) => (
  <Swiper
    className="absolute left-0 top-0 z-10 size-full overflow-hidden border-b-2 border-t-2 border-secondary shadow-allAround shadow-secondary"
    modules={[Autoplay]}
    autoplay={{ disableOnInteraction: false, delay: 5000 }}
    loop={true}
    allowTouchMove={false}
  >
    <div className="absolute left-0 top-0 z-10 size-full bg-[rgba(0,0,0,.6)]"></div>
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

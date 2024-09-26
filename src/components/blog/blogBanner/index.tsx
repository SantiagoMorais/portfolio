import "swiper/css";
import { BannerCarousel } from "./bannerCarousel";
import { BannerDescription } from "./bannerDescription";

export const BlogBanner = () => {
  return (
    <div className="size-full relative flex">
      <BannerCarousel />

      <BannerDescription />
    </div>
  );
};

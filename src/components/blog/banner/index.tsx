import "swiper/css";
import { BannerCarousel } from "./bannerCarousel";
import { BannerDescription } from "./bannerDescription";
import { IBannerProps } from "core/interfaces/banner-props";

export const Banner = ({ imagesList, subtitle, title }: IBannerProps) => (
  <div className="relative flex size-full">
    <BannerCarousel imagesList={imagesList} />
    <BannerDescription subtitle={subtitle} title={title} />
  </div>
);

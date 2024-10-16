import "swiper/css";
import { BannerCarousel } from "./bannerCarousel";
import { BannerDescription } from "./bannerDescription";

interface IBannerProps {
  imagesList: string[];
  title: string;
  subtitle: string;
}

export const Banner = ({ imagesList, subtitle, title }: IBannerProps) => {
  return (
    <div className="size-full relative flex">
      <BannerCarousel imagesList={imagesList} />

      <BannerDescription subtitle={subtitle} title={title} />
    </div>
  );
};

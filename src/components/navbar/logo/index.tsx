import { MessageCircleCode } from "lucide-react";
import { twJoin, twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
  iconSize?: string;
  padding?: string
};

export const Logo = ({ className, iconSize, padding }: LogoProps) => {
  return (
    <div className={twMerge("flex", padding)}>
      <p
        className={twJoin(
          "font-extrabold mt-2 cursor-default select-none text-textColor",
          className)}
      >
        FS<span className="text-primary">.</span>
      </p>
      <MessageCircleCode className={twMerge("size-12 text-textColor", iconSize)} />
    </div>
  );
};

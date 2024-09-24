import { MessageCircleCode } from "lucide-react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
  iconSize?: string;
  padding?: string
};

export const Logo = ({ className, iconSize, padding }: LogoProps) => {
  return (
    <div className={twMerge("flex", padding)}>
      <p
        className={twMerge(
          "text-medium first-letter:text-large font-extrabold mt-2 cursor-default select-none",
          className
        )}
      >
        FS<span className="text-primary">.</span>
      </p>
      <MessageCircleCode className={twMerge("size-8", iconSize)} />
    </div>
  );
};

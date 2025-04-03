import { ILogoProps } from "@core/interfaces/logo-props";
import { MessageCircleCode } from "lucide-react";
import { twJoin, twMerge } from "tailwind-merge";

export const Logo = ({ className, iconSize, padding }: ILogoProps) => (
  <div className={twMerge("flex", padding)}>
    <p
      className={twJoin(
        "text-textColor mt-2 font-extrabold transition-colors duration-150 select-none",
        className
      )}
    >
      FS<span className="text-primary">.</span>
    </p>
    <MessageCircleCode
      className={`transition-colors duration-150 ${twMerge("text-textColor size-12 duration-0", iconSize)}`}
    />
  </div>
);

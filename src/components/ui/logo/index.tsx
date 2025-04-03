import { ILogoProps } from "@core/interfaces/logo-props";
import { MessageCircleCode } from "lucide-react";
import { twJoin, twMerge } from "tailwind-merge";

export const Logo = ({ className, iconSize, padding }: ILogoProps) => (
  <div className={twMerge("flex", padding)}>
    <p
      className={twJoin(
        "mt-2 select-none font-extrabold text-textColor transition-colors duration-150",
        className
      )}
    >
      FS<span className="text-primary">.</span>
    </p>
    <MessageCircleCode
      className={`transition-colors duration-150 ${twMerge("size-12 text-textColor duration-0", iconSize)}`}
    />
  </div>
);

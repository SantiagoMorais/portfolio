import { MessageCircleCode } from "lucide-react";
import { twJoin, twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
  iconSize?: string;
  padding?: string;
};

export const Logo = ({ className, iconSize, padding }: LogoProps) => (
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

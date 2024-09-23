import { MessageCircleCode } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex">
      <p className="text-medium first-letter:text-large font-extrabold mt-2 cursor-default select-none">
        FS<span className="text-primary">.</span>
      </p>
      <MessageCircleCode className="size-8" />
    </div>
  );
};

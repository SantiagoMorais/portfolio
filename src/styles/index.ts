import { tv } from "tailwind-variants";

export const button = tv({
  base: "whitespace-nowrap break-normal px-2 py-1 rounded-md text-white duration-300 tracking-wider font-medium hover:text-primary",
  variants: {
    afterHover: {
      primary:
        "relative after:absolute after:bottom-0 after:left-0 after:h-[.2rem] after:bg-primary after:w-full after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-100 hover:after:origin-left after:origin-right",
    },
  },
});

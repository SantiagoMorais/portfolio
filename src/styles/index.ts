import { tv } from "tailwind-variants";

export const button = tv({
  base: "whitespace-nowrap break-normal px-2 py-1 rounded-md text-white duration-300 tracking-wider font-medium hover:text-primary text-center w-full flex items-center justify-center",
  variants: {
    afterHover: {
      primary:
        "relative after:absolute after:bottom-0 after:left-0 after:h-[.2rem] after:bg-primary after:w-full after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-100 hover:after:origin-left after:origin-right",
    },
    iconContent: {
      primary: "group"
    }
  },
});

export const icon = tv({
  base: "stroke-textColor group-hover:stroke-primary duration-300",
  variants: {
    selectedButton: {
      highlight: "stroke-primary"
    }
  }
})

import { tv } from "tailwind-variants";

export const button = tv({
  base: "whitespace-nowrap break-normal px-2 py-1 text-white duration-300 tracking-wider font-medium hover:text-primary text-center w-full flex items-center justify-center",
  variants: {
    afterHover: {
      primary:
        "relative after:absolute after:bottom-0 after:left-0 after:h-[.2rem] after:bg-primary after:w-full after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-100 hover:after:origin-left after:origin-right",
    },
    iconContent: {
      primary: "group"
    },
    withBackground: {
      primaryColor: "bg-primary rounded-3xl shadow-secondary shadow-lg w-fit px-10 py-6 focus:ring focus:ring-secondary duration-500 hover:bg-textColor hover:shadow-xl hover:shadow-secondary"
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

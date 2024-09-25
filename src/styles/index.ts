import { tv } from "tailwind-variants";

export const button = tv({
  base: "whitespace-nowrap break-normal duration-150 transition-all px-2 py-1 tracking-wider font-medium hover:text-primary text-center w-full flex items-center justify-center",
  variants: {
    afterHover: {
      primary:
        "relative duration-150 after:absolute after:bottom-0 after:left-0 after:h-[.2rem] after:bg-primary after:w-full after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-100 hover:after:origin-left after:origin-right",
    },
    iconContent: {
      primary: "group",
    },
    withBackground: {
      primaryColor:
        "bg-primary rounded-3xl shadow-secondary shadow-lg w-fit px-10 py-6 focus:ring focus:ring-secondary duration-300 hover:bg-hoverEffect hover:shadow-xl hover:shadow-secondary",
      secondaryColor: "durarion-500 transition-all rounded-lg shadow-secondary shadow-md w-full py-2 px-6 focus:ring focus:ring-primary hover:bg-hoverEffect hover:shadow-lg hover:shadow-secondary"
    },
  },
});

export const icon = tv({
  base: "stroke-textColor group-hover:stroke-primary duration-300 size-12",
  variants: {
    selectedButton: {
      highlight: "stroke-primary",
    },
  },
});

export const paragraph = tv({
  base: "w-full text-small text-textColor",
  variants: {
    sections: {
      aboutMe: "md:text-justify indent-16 sm:flex-1 sm:min-w-[30rem] px-5 pb-5 md:max-w-[50rem] md:px-10",
      myProjects: "md:text-justify indent-16",
      githubRepository: "text-center"
    }
  },
});

export const subtitle = tv({
  base: "font-bold mb-5",
  variants: {
    afterContent: {
      primary:
        "relative after:absolute after:h-[.2rem] after:w-full after:bg-primary after:left-0 after:bottom-0 after:bg-gradient-to-r from-primary to-secondaryPanel duration-300",
      primaryOnCleanBg:
        "relative after:absolute after:h-[.2rem] after:w-full after:bg-primary after:left-0 after:bottom-0 after:bg-gradient-to-r from-primary to-panel",
      secondary:
        "relative after:absolute after:h-[.2rem] after:w-2/3 after:bg-primary after:left-[16.5%] after:bottom-0 after:bg-gradient-to-r from-secondaryPanel via-primary to-secondaryPanel",
    },
    size: {
      large: "text-large",
      medium: "text-medium",
    },
    h3: {
      basic: "text-center",
    },
    color: {
      primary: "text-textColor",
    },
  },
});

import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        navy: "",
        mint: "",
        yellow: "",
      },
    },
    compoundVariants: [

      {
        variant: "solid",
        colorscheme: "navy",
        className: "text-pureWhite bg-navyBlue hover:bg-navyBlue-600",
      },
      {
        variant: "outline",
        colorscheme: "navy",
        className:
          "text-navyBlue border-navyBlue bg-transparent hover:bg-navyBlue-100",
      },
      {
        variant: "ghost",
        colorscheme: "navy",
        className:
          "text-navyBlue bg-transparent hover:bg-navyBlue-100 transition-colors duration-300",
      },
      {
        variant: "solid",
        colorscheme: "mint",
        className: "text-pureWhite bg-mintGreen hover:bg-mintGreen-600",
      },
      {
        variant: "outline",
        colorscheme: "mint",
        className:
          "text-mintGreen border-mintGreen bg-transparent hover:bg-mintGreen-100",
      },
      {
        variant: "ghost",
        colorscheme: "mint",
        className:
          "text-mintGreen bg-transparent hover:bg-mintGreen-100 transition-colors duration-300",
      },

      {
        variant: "solid",
        colorscheme: "yellow",
        className: "text-darkGray bg-softYellow hover:bg-softYellow-600",
      },
      {
        variant: "outline",
        colorscheme: "yellow",
        className:
          "text-softYellow border-softYellow bg-transparent hover:bg-softYellow-100",
      },
      {
        variant: "ghost",
        colorscheme: "yellow",
        className:
          "text-softYellow bg-transparent hover:bg-softYellow-100 transition-colors duration-300",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "navy",
    },
  }
);
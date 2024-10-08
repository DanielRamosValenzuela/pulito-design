import { cva } from "class-variance-authority";

export const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-lightGray-700 font-light",
      medium: "text-darkGray-700 font-medium",
      high: "text-darkGray-900 font-bold",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
    color: {
      navy: "text-navyBlue",
      mint: "text-mintGreen",
      yellow: "text-softYellow",
      white: "text-pureWhite",
      darkGray: "text-darkGray",
      lightGray: "text-lightGray",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
    emphasis: "medium",
  },
});
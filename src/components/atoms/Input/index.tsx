import { cn } from "@/utils";
import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

const inputStyles = cva(
  "block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
      },
      colorscheme: {
        navy: "",
        mint: "",
        yellow: "",
        gray: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "navy",
        className:
          "bg-navyBlue-50 text-darkGray placeholder-darkGray border border-navyBlue-200 focus:ring-navyBlue-500",
      },
      {
        variant: "outline",
        colorscheme: "navy",
        className:
          "border-navyBlue text-darkGray placeholder-darkGray focus:ring-navyBlue-500",
      },
      {
        variant: "solid",
        colorscheme: "mint",
        className:
          "bg-mintGreen-50 text-darkGray placeholder-darkGray border border-mintGreen-200 focus:ring-mintGreen-500",
      },
      {
        variant: "outline",
        colorscheme: "mint",
        className:
          "border-mintGreen text-darkGray placeholder-darkGray focus:ring-mintGreen-500",
      },
      {
        variant: "solid",
        colorscheme: "yellow",
        className:
          "bg-softYellow-50 text-darkGray placeholder-darkGray border border-softYellow-200 focus:ring-softYellow-500",
      },
      {
        variant: "outline",
        colorscheme: "yellow",
        className:
          "border-softYellow text-darkGray placeholder-darkGray focus:ring-softYellow-500",
      },
      {
        variant: "solid",
        colorscheme: "gray",
        className:
          "bg-lightGray-100 text-darkGray placeholder-darkGray border border-lightGray-300 focus:ring-darkGray",
      },
      {
        variant: "outline",
        colorscheme: "gray",
        className:
          "border-lightGray-500 text-darkGray placeholder-darkGray focus:ring-darkGray",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      colorscheme: "gray",
    },
  }
);

type InputProps<C extends React.ElementType = "input"> = {
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C> &
  VariantProps<typeof inputStyles>;

type InputComponent = <C extends React.ElementType = "input">(
  props: InputProps<C> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement | null;

export const Input = forwardRef(
  <C extends React.ElementType = "input">(
    { as, variant, size, colorscheme, className, ...props }: InputProps<C>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const Component = as || "input";

    return (
      <Component
        ref={ref}
        className={cn(
          inputStyles({ variant, size, colorscheme, className })
        )}
        {...props}
      />
    );
  }
) as InputComponent;

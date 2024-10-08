import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";

const textStyles = cva("w-full", {
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

type TextProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
} & Omit<React.ComponentProps<C>, "as" | "className"> &
  VariantProps<typeof textStyles>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C> & { ref?: React.Ref<ElementTypeProps<C>> }
) => React.ReactElement | null;

type ElementTypeProps<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export const Text = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      color,
      className,
      ...props
    }: TextProps<C>,
    ref: React.Ref<ElementTypeProps<C>>
  ) => {
    const Component = as || "span";

    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            size,
            weight,
            emphasis,
            italic,
            underline,
            align,
            color,
            className,
          })
        )}
        {...props}
      />
    );
  }
) as TextComponent;

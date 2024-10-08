import { cn } from "@/utils";
import React, { forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { textStyles } from "./styles";



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

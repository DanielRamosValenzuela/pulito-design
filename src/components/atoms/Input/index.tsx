import { cn } from "@/utils";
import { forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { inputStyles } from "./style";

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

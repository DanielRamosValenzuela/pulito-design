import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { buttonStyles } from "./styles";

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonStyles({ variant, size, colorscheme, className })
        )}
        {...props}
      />
    );
  }
);

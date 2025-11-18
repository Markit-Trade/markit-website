import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-200",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-200",
        orange: "bg-primary text-primary-foreground rounded-sm font-medium hover:opacity-90 transition-all duration-200",
        "orange-outline": "border border-primary bg-transparent text-primary rounded-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200",
        primary: "bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200",
        "outline-primary": "border-2 border-primary bg-transparent text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200",
        industrial: "border-2 border-foreground bg-transparent text-foreground rounded-none font-medium hover:bg-primary hover:border-primary hover:text-background transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-12 rounded-none px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

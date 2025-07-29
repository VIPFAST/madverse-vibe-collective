import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        festival: 
          "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-bold shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110 transform transition-all duration-300 border-2 border-primary/20",
        cta: 
          "bg-cta text-cta-foreground font-bold shadow-2xl hover:bg-cta/90 hover:shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:scale-105 transform transition-all duration-300",
        neon:
          "bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-xl px-12 text-lg",
        xl: "h-16 rounded-xl px-16 text-xl font-black",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

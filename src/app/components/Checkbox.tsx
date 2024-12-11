import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { forwardRef } from "react"


const Slider = forwardRef<
React.ElementRef<typeof CheckboxPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} {...props}>
        <CheckboxPrimitive.CheckboxIndicator />
    </CheckboxPrimitive.Root>
))
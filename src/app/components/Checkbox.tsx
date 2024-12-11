import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react";
import { forwardRef } from "react"


const CheckBox = forwardRef<
React.ElementRef<typeof CheckboxPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} {...props} className="w-4 h-4 bg-white border border-indigo-400">
        <CheckboxPrimitive.CheckboxIndicator>
          <CheckIcon className="w-4 h-4 text-indigo-500"/>
        </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
))

CheckBox.displayName = CheckboxPrimitive.Root.displayName;


export { CheckBox } ;


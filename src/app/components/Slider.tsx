"use client"


import * as SliderPrimitive from "@radix-ui/react-slider"
import { forwardRef } from "react"



const Slider = forwardRef<
React.ElementRef<typeof SliderPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
<SliderPrimitive.Root
    ref={ref}
    {...props}
    className="relative flex w-[200px] h-[20px] touch-none items-center"
>
    <SliderPrimitive.Track className="relative h-2 w-full grow rounded-full bg-indigo-200">
    <SliderPrimitive.Range className="absolute rounded-full h-full bg-indigo-400"  />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb  className="block h-5 w-5 cursor-pointer rounded-full border-2 border-indigo-300 bg-indigo-500 hover:bg-indigo-600 ring-offset-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"/>
</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
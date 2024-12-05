"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { label: string; isFlex?: boolean }
>(({ className, type, label, isFlex, ...props }, ref) => {
  const [isFocused, setFocused] = React.useState(false);
  const [isFilled, setFilled] = React.useState(false);

  return (
    <div className={cn("relative", isFlex && "flex-1")}>
      <span
        className={cn(
          "absolute top-[-20px] left-0 text-[12px] font-[400] font-['Inter'] capitalize transition-colors",
          isFocused && "text-[--gold]",
          props["aria-invalid"] && "text-red-500"
        )}
      >
        {label}
      </span>
      <input
        type={type}
        className={cn(
          "flex h-[42px] w-full bg-transparent inter ring-offset-0 px-0 py-[1px] border-b-[1px] border-[#fff]/30 hover:border-[--gold] transition-colors focus:border-[--gold] focus:outline-none aria-[invalid=true]:border-red-500",
          isFilled && "border-[--gold]",
          className
        )}
        ref={ref}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setFilled(!!e.target.value.length);
        }}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };

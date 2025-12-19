import React from "react"
import clsx from "clsx"
import { TextareaProps } from "./textarea.types"
 export const Textarea=({className,...props}:TextareaProps)=>{
 return(
    <textarea
      className={clsx(
       "w-[200px] min-w-24 rounded-md p-2  transition-all text-sm",
    "border border-zinc-300 dark:border-zinc-600",
    "focus:outline-none",
    "focus:ring-2 focus:ring-zinc-500/25   dark:focus:ring-zinc-100/25  focus:ring-offset-0",className)}

       {...props}
    />
 )
} 
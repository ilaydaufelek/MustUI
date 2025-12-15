import type {
  HTMLAttributes
} from "react"

export  interface SheetContextProps {
open:boolean;
setOpen:(value:boolean)=>void;
}

 export  interface SheetProps extends HTMLAttributes<HTMLDivElement> {
children:React.ReactNode
className?:string
}

 export  interface SheetTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children:React.ReactNode;
  className?:string
}

 export  interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
children:React.ReactNode;
className?:string
side?:'left' | 'right' |'top' |'bottom'
}

 export  interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

 export  interface SheetTitleProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}


 export  interface SheetDescriptionProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

 export  interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

 export  interface SheetCloseProps {
  asChild?: boolean
  children: React.ReactElement<{
    onClick?: React.MouseEventHandler
  }>
}

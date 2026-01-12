 export interface DropdownContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
 export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string
     open?: boolean
  onOpenChange?: (open: boolean) => void
}

 export interface DropdownMenuTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
     asChild?: boolean
}   

  export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string
    side?:"left" | "right"|"top" | "bottom"
}

  export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?:React.ReactNode;
    className?:string
}

 interface DialogContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
interface DialogProps{
    children:React.ReactNode
}
  interface DialogTriggerProps{
    children:React.ReactNode
}

interface DialogContentProps{
    children:React.ReactNode
    
}

interface DialogTitleProps{
    children:React.ReactNode
}

interface DialogDescriptionProps{
    children:React.ReactNode
}

interface DialogFooterProps{
    children:React.ReactNode
}
interface DialogCancelProps{
    children:React.ReactNode
}

interface DialogSubmitProps{
    children:React.ReactNode;
    onSubmit?:()=>void;
}

export {DialogContextType,DialogProps,DialogTriggerProps,DialogContentProps,DialogTitleProps,DialogDescriptionProps,DialogFooterProps,DialogCancelProps,DialogSubmitProps}
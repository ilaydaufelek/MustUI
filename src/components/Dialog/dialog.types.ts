interface DialogContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
}
interface DialogTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode
    className?:string
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode,
        className?:string
    
}

interface DialogTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode,
  className?:string
}

interface DialogDescriptionProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode
    className?:string
}

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
}
interface DialogCancelProps extends React.HTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode
    className?:string
}

interface DialogSubmitProps  extends React.HTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode;
    onSubmit?:()=>void;
    className?:string
}

export {DialogContextType,DialogProps,DialogTriggerProps,DialogContentProps,DialogTitleProps,DialogDescriptionProps,DialogFooterProps,DialogCancelProps,DialogSubmitProps}
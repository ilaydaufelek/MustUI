 export interface AccordionContextType{
   openItem: string[];
  setOpenItem: (value: string[]) => void
  multiple?:boolean
    
}

 export interface AccordionItemContextType{
     value:string;
    
}


 export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
 children:React.ReactNode;
 className?:string;
 multiple?:boolean;

}

 export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string;
    value:string
    
   
}

 export interface AccordionTriggerProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode;
    className?:string
}

 export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
   children:React.ReactNode;
   className?:string
}
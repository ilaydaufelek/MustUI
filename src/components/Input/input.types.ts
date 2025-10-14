export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'type'> {
    type?:'text' | 'password' | 'email';
    value?:string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder?:string;
    disabled?:boolean;
    name?:string;
    id?:string;
    className?:string;
    variant?:'outlined' |'elevated' |'filled'
    size?:'sm'| 'md' | 'lg'
}
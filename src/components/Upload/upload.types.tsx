export interface UploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange" | "multiple"
  > {
  value: File[] | null
  onChange: (files: File[] | null) => void
  multiple?: boolean
  label?: string
  helperText?: string
  error?: string
  text?:string
  className?:string
}
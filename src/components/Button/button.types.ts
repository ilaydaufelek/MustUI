export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,'size' | 'onClick'> {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
};

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
};

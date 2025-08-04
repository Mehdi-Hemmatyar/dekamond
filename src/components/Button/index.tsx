import { ButtonProps } from "@/types/Button";
import clsx from "clsx";
import styles from './Button.module.scss'

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  iconAfter,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        isLoading && styles.loading,
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

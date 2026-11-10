import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

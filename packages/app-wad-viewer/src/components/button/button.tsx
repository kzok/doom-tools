import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

type ButtonColor = "primary" | "danger" | "default" | null;
type ButtonSize = "small" | "large" | "default" | null;

/**
 * styled plain Button component.
 */
export const Button = React.memo(
  React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
      /** button color */
      color?: ButtonColor | null | undefined;
      /** button size */
      size?: ButtonSize | null | undefined;
    }
  >((props, ref) => {
    const { children, className, color, size, ...otherProps } = props;

    return (
      <button
        type="button"
        {...otherProps}
        ref={ref}
        className={clsx(styles.button, className)}
        data-color={color}
        data-size={size}
      >
        {children}
      </button>
    );
  }),
);

import React from "react";
import clsx from "clsx";
import styles from "./subtle-button.module.css";

/**
 * subtle-style Button component.
 */
export const SubtleButton = React.memo(
  React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    (props, ref) => {
      const { children, className, ...otherProps } = props;

      return (
        <button type="button" {...otherProps} ref={ref} className={clsx(styles.button, className)}>
          {children}
        </button>
      );
    },
  ),
);

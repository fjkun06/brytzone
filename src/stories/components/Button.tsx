import React from "react";
import ".././button.css";

interface ButtonProps {
  /**
   * How large should the button be?
   */
  children?: React.ReactNode;
  icon?: React.ReactNode;
  /**
   * Button contents
   */
  category?: "content" | "action" | "search" | "contact" | "default";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, category = "default", icon }: ButtonProps) => {
  return (
    <button type="button" className={`brytzone_button brytzone_button--${category}`}>
      {category === "action" && <>{icon}</>}
      {category === "content" && <>{icon}</>}
      {children}
    </button>
  );
};

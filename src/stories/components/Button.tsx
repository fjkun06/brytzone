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
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, category = "default", icon, onClick,disabled=false }: ButtonProps) => {
  return (
    <button type="button" className={`brytzone_button brytzone_button--${category}`} onClick={onClick} disabled={disabled}>
      {category === "action" && <>{icon}</>}
      {category === "content" && <>{icon}</>}
      {children}
    </button>
  );
};

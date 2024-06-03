import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?(): void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "btn btn-primary",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

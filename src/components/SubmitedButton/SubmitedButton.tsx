import React from "react";

interface SubmitedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}
const SubmitedButton: React.FC<SubmitedButtonProps> = ({
  children,
  loading,
  ...buttonProps
}) => {
  return (
    <button
      className="w-full rounded-2xl h-15 bg-primary hover:bg-tertiary hover:text-black cursor-pointer"
      {...buttonProps}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default SubmitedButton;

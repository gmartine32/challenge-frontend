import React from 'react';

interface SubmitedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const SubmitedButton: React.FC<SubmitedButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button
      className="w-full rounded-2xl h-15 bg-primary hover:bg-tertiary hover:text-black cursor-pointer"
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default SubmitedButton;
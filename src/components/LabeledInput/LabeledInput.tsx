import React from 'react';

interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ label, ...inputProps }) => {
  return (
    <div>
      <label className="block mb-1 text-left text-xl">{label}</label>
      <input
        className="w-full h-15 rounded-xl border border-primary bg-dark-background px-4 py-3 outline-none"
        {...inputProps}
      />
    </div>
  );
};

export default LabeledInput;

import React, { useState } from "react";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  clearable?: boolean; 
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  clearable = false,
  value: propValue,
  onChange,
  ...inputProps
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    propValue?.toString() || ""
  );

  const isControlled = propValue !== undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    if (!isControlled) {
      setInternalValue("");
    }

    onChange?.(event);
  };

  const currentValue = isControlled ? propValue : internalValue;

  return (
    <div className="w-full relative">
      <label className="block text-white mb-1 text-left text-xl">{label}</label>
      <div className="w-full relative flex items-center">
        <input
          className="w-full h-15 rounded-xl border border-primary bg-dark-background px-4 py-3 outline-none text-white pr-10"
          value={currentValue}
          onChange={handleChange}
          {...inputProps}
        />
        {clearable && currentValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 text-white text-xl focus:outline-none"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default LabeledInput;

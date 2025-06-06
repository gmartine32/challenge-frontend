import React, { useState } from "react";

interface LabeledSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label: string;
  options: { value: string; label: string }[];
  clearable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
  label,
  options,
  clearable = false,
  value: propValue,
  onChange,
  ...selectProps
}) => {
  const [internalValue, setInternalValue] = useState<string>("");

  const isControlled = propValue !== undefined;
  const currentValue = isControlled ? propValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (!isControlled) {
      setInternalValue(selectedValue);
    }
    onChange?.(selectedValue);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue("");
    }
    onChange?.("");
  };

  return (
    <div className="w-full relative">
      <label className="block text-white mb-1 text-left text-xl">{label}</label>
      <div className="w-full relative flex items-center">
        <select
          value={currentValue}
          onChange={handleChange}
          className="w-full h-15 rounded-xl border border-primary bg-dark-background px-4 py-3 pr-10 outline-none text-white appearance-none"
          {...selectProps}
        >
          <option value="" disabled hidden className="text-gray-400">
            Choice an option
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
        {clearable && currentValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl focus:outline-none"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default LabeledSelect;

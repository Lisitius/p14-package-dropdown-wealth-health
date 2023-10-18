import React from "react";

const Dropdown = ({
  type,
  name,
  value,
  options,
  onChange,
  label,
  defaultOption,
}) => {
  return (
    <div className="select">
      {label && <label htmlFor={name}>{label}</label>}
      <select type={type} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" disabled hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

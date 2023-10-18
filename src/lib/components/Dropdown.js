import React from "react";

const Dropdown = ({ type, name, value, options, onChange, label }) => {
  return (
    <div className="select">
      {label && <label htmlFor={name}>{label}</label>}
      <select type={type} name={name} value={value} onChange={onChange}>
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

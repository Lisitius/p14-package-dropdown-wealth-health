import React from "react";

const Dropdown = ({ name, department, options, onChange }) => {
  return (
    <select
      className="select"
      name={name}
      value={department}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

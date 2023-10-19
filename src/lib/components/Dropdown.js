import React from "react";
import "./Dropdown.css";

const Dropdown = ({
  type,
  name,
  value,
  options,
  onChange,
  defaultOption,
  formErrors,
}) => {
  return (
    <div>
      <select
        className={`select ${formErrors[name] ? "select-error" : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      >
        {defaultOption && (
          <option value="" disabled hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {formErrors[name] && <p className="error-text">{formErrors[name]}</p>}
    </div>
  );
};

export default Dropdown;

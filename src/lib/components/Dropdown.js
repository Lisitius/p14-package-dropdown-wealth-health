// src/lib/components/Dropdown.js
import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({
  name,
  value,
  options,
  onChange,
  defaultOption,
  formErrors,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (search.length === 0) {
      setFilteredOptions(options);
    } else {
      const lowercasedSearch = search.toLowerCase();
      const filtered = options.filter((option) =>
        option.value.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredOptions(filtered);
    }
  }, [search, options]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    onChange({ target: { name, value: option.value } });
    setIsOpen(false);
    setSearch(option.label || option.value);
  };

  return (
    <div
      ref={wrapperRef}
      className={`dropdown ${formErrors[name] ? "dropdown-error" : ""}`}
    >
      {isOpen ? (
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={handleSearchChange}
          className="dropdown-button"
          placeholder={defaultOption}
        />
      ) : (
        <button className="dropdown-button" onClick={handleToggle}>
          {value || defaultOption}
        </button>
      )}
      {isOpen && (
        <div className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label || option.value}
            </div>
          ))}
        </div>
      )}
      {formErrors[name] && <p className="error-text">{formErrors[name]}</p>}
    </div>
  );
};

export default Dropdown;

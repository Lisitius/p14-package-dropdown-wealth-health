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

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOptionClick = (value) => {
    onChange({ target: { name, value } });
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div
      ref={wrapperRef}
      className={`dropdown ${formErrors[name] ? "dropdown-error" : ""}`}
    >
      <button className="dropdown-button" onClick={handleToggle}>
        {value || defaultOption}
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            className="search-input"
            placeholder="Recherche..."
          />
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleOptionClick(option.value)}
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

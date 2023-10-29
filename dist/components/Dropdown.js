"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("./Dropdown.css");
// src/lib/components/Dropdown.js

var Dropdown = function Dropdown(_ref) {
  var name = _ref.name,
    value = _ref.value,
    options = _ref.options,
    onChange = _ref.onChange,
    defaultOption = _ref.defaultOption,
    formErrors = _ref.formErrors;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var _useState5 = (0, _react.useState)(options),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    filteredOptions = _useState6[0],
    setFilteredOptions = _useState6[1];
  var wrapperRef = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (search.length === 0) {
      setFilteredOptions(options);
    } else {
      var lowercasedSearch = search.toLowerCase();
      var filtered = options.filter(function (option) {
        return option.value.toLowerCase().includes(lowercasedSearch);
      });
      setFilteredOptions(filtered);
    }
  }, [search, options]);
  (0, _react.useEffect)(function () {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  var handleToggle = function handleToggle() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(function () {
        return inputRef.current.focus();
      }, 0);
    }
  };
  var handleSearchChange = function handleSearchChange(e) {
    setSearch(e.target.value);
    setIsOpen(true);
  };
  var handleOptionClick = function handleOptionClick(option) {
    onChange({
      target: {
        name: name,
        value: option.value
      }
    });
    setIsOpen(false);
    setSearch(option.label || option.value);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: wrapperRef,
    className: "dropdown ".concat(formErrors[name] ? "dropdown-error" : "")
  }, isOpen ? /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    type: "text",
    value: search,
    onChange: handleSearchChange,
    className: "dropdown-button",
    placeholder: defaultOption
  }) : /*#__PURE__*/_react["default"].createElement("button", {
    className: "dropdown-button",
    onClick: handleToggle
  }, value || defaultOption), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-list"
  }, filteredOptions.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "dropdown-list-item",
      onClick: function onClick() {
        return handleOptionClick(option);
      }
    }, option.label || option.value);
  })), formErrors[name] && /*#__PURE__*/_react["default"].createElement("p", {
    className: "error-text"
  }, formErrors[name]));
};
var _default = exports["default"] = Dropdown;
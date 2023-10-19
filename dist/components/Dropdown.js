"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Dropdown.css");
var Dropdown = function Dropdown(_ref) {
  var type = _ref.type,
    name = _ref.name,
    value = _ref.value,
    options = _ref.options,
    onChange = _ref.onChange,
    defaultOption = _ref.defaultOption,
    formErrors = _ref.formErrors;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("select", {
    className: "select ".concat(formErrors[name] ? "select-error" : ""),
    type: type,
    name: name,
    value: value,
    onChange: onChange
  }, defaultOption && /*#__PURE__*/_react["default"].createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, defaultOption), options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: option.value
    }, option.value);
  })), formErrors[name] && /*#__PURE__*/_react["default"].createElement("p", {
    className: "error-text"
  }, formErrors[name]));
};
var _default = exports["default"] = Dropdown;
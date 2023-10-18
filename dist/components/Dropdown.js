"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Dropdown = function Dropdown(_ref) {
  var type = _ref.type,
    name = _ref.name,
    value = _ref.value,
    options = _ref.options,
    onChange = _ref.onChange,
    label = _ref.label,
    defaultOption = _ref.defaultOption;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "select"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
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
    }, option.label);
  })));
};
var _default = exports["default"] = Dropdown;
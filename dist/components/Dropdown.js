"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Dropdown = function Dropdown(_ref) {
  var name = _ref.name,
    department = _ref.department,
    options = _ref.options,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("select", {
    className: "select",
    name: name,
    value: department,
    onChange: onChange
  }, options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: option.value
    }, option.label);
  }));
};
var _default = exports["default"] = Dropdown;
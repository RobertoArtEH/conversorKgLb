"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var convToKg = exports.convToKg = function convToKg() {
  for (var _len = arguments.length, lb = Array(_len), _key = 0; _key < _len; _key++) {
    lb[_key] = arguments[_key];
  }

  return lb.map(function (lb) {
    return (lb / 2.20462).toFixed(3);
  });
};

var convToLb = exports.convToLb = function convToLb() {
  for (var _len2 = arguments.length, kg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    kg[_key2] = arguments[_key2];
  }

  return kg.map(function (kg) {
    return (kg * 2.20462).toFixed(3);
  });
};
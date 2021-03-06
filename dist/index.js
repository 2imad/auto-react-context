"use strict";
var _react = _interopRequireWildcard(require("react"));
function _typeof(a) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              "function" == typeof Symbol &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    _typeof(a)
  );
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports["default"] = void 0);
function _getRequireWildcardCache() {
  if ("function" != typeof WeakMap) return null;
  var a = new WeakMap();
  return (
    (_getRequireWildcardCache = function () {
      return a;
    }),
    a
  );
}
function _interopRequireWildcard(a) {
  if (a && a.__esModule) return a;
  if (null === a || ("object" !== _typeof(a) && "function" != typeof a))
    return { default: a };
  var b = _getRequireWildcardCache();
  if (b && b.has(a)) return b.get(a);
  var c = {},
    d = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var e in a)
    if (Object.prototype.hasOwnProperty.call(a, e)) {
      var f = d ? Object.getOwnPropertyDescriptor(a, e) : null;
      f && (f.get || f.set) ? Object.defineProperty(c, e, f) : (c[e] = a[e]);
    }
  return (c["default"] = a), b && b.set(a, c), c;
}
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })),
      c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
          });
  return a;
}
function _defineProperty(a, b, c) {
  return (
    b in a
      ? Object.defineProperty(a, b, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[b] = c),
    a
  );
}
function _slicedToArray(a, b) {
  return (
    _arrayWithHoles(a) ||
    _iterableToArrayLimit(a, b) ||
    _unsupportedIterableToArray(a, b) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(a, b) {
  if (a) {
    if ("string" == typeof a) return _arrayLikeToArray(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    return (
      "Object" === c && a.constructor && (c = a.constructor.name),
      "Map" === c || "Set" === c
        ? Array.from(a)
        : "Arguments" === c ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
        ? _arrayLikeToArray(a, b)
        : void 0
    );
  }
}
function _arrayLikeToArray(a, b) {
  (null == b || b > a.length) && (b = a.length);
  for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
  return d;
}
function _iterableToArrayLimit(a, b) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) {
    var c = [],
      d = !0,
      e = !1,
      f = void 0;
    try {
      for (
        var g, h = a[Symbol.iterator]();
        !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b));
        d = !0
      );
    } catch (a) {
      (e = !0), (f = a);
    } finally {
      try {
        d || null == h["return"] || h["return"]();
      } finally {
        if (e) throw f;
      }
    }
    return c;
  }
}
function _arrayWithHoles(a) {
  if (Array.isArray(a)) return a;
}
var _default = function (a, b, c) {
  var d = /*#__PURE__*/ (0, _react.createContext)();
  return {
    Context: d,
    Provider: function Provider(e) {
      var f = e.children,
        g = (0, _react.useReducer)(a, c),
        h = _slicedToArray(g, 2),
        i = h[0],
        j = h[1],
        k = {};
      for (var l in b) k[l] = b[l](j);
      return /*#__PURE__*/ _react["default"].createElement(
        d.Provider,
        { value: _objectSpread({ state: i }, k) },
        f
      );
    },
  };
};
exports["default"] = _default;

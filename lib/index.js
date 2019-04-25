'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultExtensions = undefined;

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      CallExpression: function CallExpression(_ref2) {
        var node = _ref2.node;

        (0, _require2.default)(t, node);
      },
      ImportDeclaration: function ImportDeclaration(_ref3) {
        var node = _ref3.node;

        (0, _import2.default)(t, node);
      }
    }
  };
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _require = require('./transformers/require');

var _require2 = _interopRequireDefault(_require);

var _import = require('./transformers/import');

var _import2 = _interopRequireDefault(_import);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultExtensions = exports.defaultExtensions = ['.js', '.jsx', '.es', '.es6'];

function resolvable(p) {
  try {
    return !!require.resolve(_path2.default.join(process.cwd(), p)).length;
  } catch (e) {
    return false;
  }
}
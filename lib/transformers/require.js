'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformRequireCall;

var _resolve = require('../resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformRequireCall(t, node) {
  if (t.isIdentifier(node.callee, { name: 'require' })) {
    node.arguments[0] = t.stringLiteral((0, _resolve2.default)(node.arguments[0].value));
  }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformImportCall;

var _resolve = require('../resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformImportCall(t, node) {
  node.source = t.stringLiteral((0, _resolve2.default)(node.source.value));
}
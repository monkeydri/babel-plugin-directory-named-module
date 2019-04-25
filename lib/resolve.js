'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvable = resolvable;
exports.default = resolve;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolvable(p) {
  try {
    return !!require.resolve(_path2.default.join(process.cwd(), p)).length;
  } catch (e) {
    return false;
  }
}

function resolve(soursePath) {
  var basename = _path2.default.basename(soursePath);
  if (!resolvable(soursePath)) {
    for (var i = 0; i < _index.defaultExtensions.length; i++) {
      var modulePath = soursePath + _path2.default.sep + basename + _index.defaultExtensions[i];
      if (resolvable(modulePath)) {
        return modulePath;
      }
    }
  }
  return soursePath;
}
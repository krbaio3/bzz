var path = require('path');
var _root = path.resolve(__dirname, '..');

exports.root = function(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
};
// exports.root = root;

exports.removeWarning = function(__path) {
  return path.join(__dirname, __path);
};

exports.resolve = function(dir) {
  return path.join(__dirname, '..', dir);
};

var path = require('path');

var HOME = process.env.HOME;
var ROOT = path.join(HOME, 'lib', 'node_modules');

module.exports = function (mod) {
  var pth;
  if (mod.substr(0,1) === '.') {
    var cwd = process.cwd();
    pth = path.join(cwd, mod);
  } else {
    pth = path.join(ROOT, mod);
  }
  return pth;
}

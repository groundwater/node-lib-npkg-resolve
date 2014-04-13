var path = require('path');

var HOME = process.env.HOME;
var ROOT = path.join(HOME, 'lib', 'node_modules');

module.exports = function (mod, home) {
  var pth;
  var root = home || ROOT;
  var pref = mod.substr(0,1);
  if (pref === '.') {
    var cwd = process.cwd();
    pth = path.join(cwd, mod);
  } else if (pref === '/') {
    pth = path.normalize(mod);
  } else {
    pth = path.join(root, mod);
  }
  return pth;
}

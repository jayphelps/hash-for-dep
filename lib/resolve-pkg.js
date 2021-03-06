var resolve = require('resolve');
var path = require('path');

/* @private
 *
 * @method resolvePkg
 * @param {String} name
 * @param {String} dir
 * @return {String}
 */
module.exports = function resolvePkg(name, dir) {
  if (name === './') {
    return path.resolve(name);
  }
  return resolve.sync(name, { basedir: dir || __dirname });
};

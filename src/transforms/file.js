/**
 * This is a custom Jest transformer turning file imports into filenames.
 *
 * @see http://facebook.github.io/jest/docs/tutorial-webpack.html
 * @type {Object}
 */

const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};

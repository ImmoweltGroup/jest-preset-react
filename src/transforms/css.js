/**
 * This is a custom Jest transformer turning style imports into empty objects.
 * The output is always the same since an CSS module is just a plain JS object.
 *
 * @see http://facebook.github.io/jest/docs/tutorial-webpack.html
 * @type {Object}
 */
module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    return 'cssTransform';
  }
};

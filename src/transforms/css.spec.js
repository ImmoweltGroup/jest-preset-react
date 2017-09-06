const transform = require('./css.js');

describe('transform.css', () => {
  it('should export a jest transform object for css files.', () => {
    expect(typeof transform).toBe('object');
    expect(typeof transform.process).toBe('function');
    expect(typeof transform.getCacheKey).toBe('function');
  });
});

describe('transform.css.process()', () => {
  it('should return a static empty commonJS export string ignoring any arguments.', () => {
    expect(transform.process()).toBe('module.exports = {};');
    expect(transform.process('foo')).toBe('module.exports = {};');
  });
});

describe('transform.css.getCacheKey()', () => {
  it('should return a static empty commonJS export string ignoring any arguments.', () => {
    expect(transform.getCacheKey()).toBe('cssTransform');
    expect(transform.getCacheKey('foo')).toBe('cssTransform');
  });
});

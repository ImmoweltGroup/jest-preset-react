const config = require('../jest-preset');

describe('json-preset', () => {
  it('should be valid json', () => {
    expect(JSON.parse(config)).toBeDefined();
  });
});

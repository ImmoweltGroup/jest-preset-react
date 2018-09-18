const {resolve} = require('path');
const {existsSync, readFileSync} = require('fs');

describe('json-preset', () => {
  const configPath = resolve(__dirname, '../jest-preset.json');

  it('should be existing', () => {
    expect(existsSync(configPath)).toBe(true);
  });

  it('should be valid json', () => {
    const config = readFileSync(configPath);
    expect(JSON.parse(config)).toBeDefined();
  });
});

const transform = require('./file.js');

describe('transform.file', () => {
	it('should export a jest transform object for generic files.', () => {
		expect(typeof transform).toBe('object');
		expect(typeof transform.process).toBe('function');
	});
});

describe('transform.file.process()', () => {
	it('should return a a filePath based on the passed argument.', () => {
		expect(transform.process('foo', 'foo.jpg')).toContain('module.exports');
		expect(transform.process('foo', 'foo.jpg')).toContain('foo.jpg');
	});
});

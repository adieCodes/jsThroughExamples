const { name } = require('../index');

describe('Primitive Types', () => {
    it(`Name is a string of student's name`, () => {
        expect(typeof name).toBe('string');
    });
});

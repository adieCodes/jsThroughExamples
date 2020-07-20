const { name } = require('../01.dataTypes/01.primitives');

describe('Primitive Types', () => {
    it(`Name is a string of student's name`, () => {
        expect(typeof name).toBe('string');
    });
});

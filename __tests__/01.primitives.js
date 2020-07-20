const { name, age, isLearning } = require('../01.dataTypes/01.primitives');

describe('Primitive Types', () => {
    it(`Name is a string showing the student's name`, () => {
        expect(typeof name).toBe('string');
    });
    it(`Age is a number showing the student's Age`, () => {
        expect(typeof age).toBe('number');
    });
    it(`Name is a string of student's name`, () => {
        expect(typeof isLearning).toBe('boolean');
    });
});

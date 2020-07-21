const { numArr, pupil } = require('../01.dataTypes/02.dataStructures');

describe('Data Structures', () => {
    describe('Array', () => {
        it('numArr returns an array', () => {
            expect(Array.isArray(numArr)).toBe(true);
        });
        it('numArr returns 1-5 in order', () => {
            const expected = [1, 2, 3, 4, 5];

            expect(numArr).toEqual(expect.arrayContaining(expected));
        });
    });
    describe('Object', () => {
        it('pupil is an object', () => {
            const isObj = typeof pupil === 'object' && pupil !== null;
            expect(isObj).toBeTruthy();
        });
        it('pupil has a name key', () => {
            expect(pupil).toHaveProperty('name');
        });
        it('pupil has a name key with string value', () => {
            expect(typeof pupil.name).toEqual('string');
        });
        it('pupil has a age key', () => {
            expect(pupil).toHaveProperty('age');
        });
        it('pupil has a age key with number value', () => {
            expect(typeof pupil.age).toEqual('number');
        });
        it('pupil has a isLearning key', () => {
            expect(pupil).toHaveProperty('isLearning');
        });
        it('pupil has a isLearning key with boolean value', () => {
            expect(typeof pupil.isLearning).toEqual('boolean');
        });
    });
});

import stringCalc from '../stringCalc';

describe('initial test', () => {
    it('do some simple stuff', () => {
        expect(stringCalc('')).toBe(0);
    });
});

describe('second tests wave', () => {
    it('adds numbers', () => {
        expect(stringCalc('1')).toBe(1);
    });

    it('adds numbers', () => {
        expect(stringCalc('1,2')).toBe(3);
    });
});

describe('3 tests wave', () => {
    it('adds several numbers', () => {
        expect(stringCalc('1,2,3,4,5')).toBe(15);
    });

    it('adds several numbers', () => {
        expect(stringCalc('1,2,2,3')).toBe(8);
    });
});

describe('4 tests wave', () => {
    it('handles new line', () => {
        expect(stringCalc('1\n2,3')).toBe(6);
    });

    it('handles new line', () => {
        expect(stringCalc('1,2\n3,1')).toBe(7);
    });
})

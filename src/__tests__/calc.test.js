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
});

describe('5 handle custom delimiter like "//[delimiter]\n[numbers...]"', () => {
    it('handle ; as delimeter', () => {
        expect(stringCalc('//;\n1;2')).toBe(3);
    });

    it('handles p as delimeter', () => {
        expect(stringCalc('//p\n1p2p4')).toBe(7);
    });
});

describe('6 tests wave', () => {
    it("negatives shall no pass", () => {
        expect(() => stringCalc('2,-1')).toThrow('negatives not allowed')
    });
    it("negatives shall no pass", () => {
        expect(() => stringCalc('2,1,0,-1')).toThrow('negatives not allowed')
    });
});

describe('7 tests wave', () => {
    /**
     * Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
     */

    it("ignore big numbers", () => {
        expect(stringCalc('2,1001')).toBe(2);
    });

    it("ignore big numbers", () => {
        expect(stringCalc('3,1001,4')).toBe(7);
    });
});

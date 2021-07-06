import {RomanCalculator} from '../src/RomanCalculator'

test('Give a number decimal 5 toRomanNumber should return V',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(5)).toBe('V');    
})
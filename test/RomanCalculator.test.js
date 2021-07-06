import {RomanCalculator} from '../src/RomanCalculator'

test('Give a number decimal 1 toRomanNumber should return I',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(1)).toBe('I');    
})

test('Give a number decimal 5 toRomanNumber should return V',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(5)).toBe('V');    
})

test('Give a number decimal 10 toRomanNumber should return X',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(10)).toBe('X');    
})

test('Give a number decimal 50 toRomanNumber should return L',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(50)).toBe('L');    
})

test('Give a number decimal 100 toRomanNumber should return C',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(100)).toBe('C');    
})

test('Give a number decimal 500 toRomanNumber should return D',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(500)).toBe('D');    
})

test('Give a number decimal 1000 toRomanNumber should return M',()=>{
    const obj = new RomanCalculator();
    expect(obj.toRomanNumber(1000)).toBe('M');    
})
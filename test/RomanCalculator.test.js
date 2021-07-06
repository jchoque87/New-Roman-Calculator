import {RomanCalculator} from '../src/RomanCalculator'

test("Given a roman numeral 'V' Roman Calculator should return 5", () => {
    const calculator = new RomanCalculator
    expect(calculator.getDecimalNumberValue('V')).toBe(5)
})

test("Given a roman numeral 'I' Roman Calculator should return 1", () => {
    const calculator = new RomanCalculator
    expect(calculator.getDecimalNumberValue('I')).toBe(1)
})

test("Given a roman numeral 'X' Roman Calculator should return 10", () => {
    const obj = new RomanCalculator
    expect(obj.getDecimalNumberValue('X')).toBe(10)
})
test("Given a roman numeral 'L' Roman Calculator should return 50", () => {
    const obj = new RomanCalculator
    expect(obj.getDecimalNumberValue('L')).toBe(50)
})

test("Given a roman numeral 'D' Roman Calculator should return 500", () => {
    const obj = new RomanCalculator
    expect(obj.getDecimalNumberValue('D')).toBe(500)
})
test("Given a roman numeral 'C' Roman Calculator should return 100", () => {
    const obj = new RomanCalculator
    expect(obj.getDecimalNumberValue('C')).toBe(100)
})
test("Given a roman numeral 'M' Roman Calculator should return 1000", () => {
    const obj = new RomanCalculator
    expect(obj.getDecimalNumberValue('M')).toBe(1000)
})

test("Given not a roman number 'R' Roman Calculator should return 'not a number'", () => {
    const obj = new RomanCalculator
    expect(obj.getDecimalNumberValue('M')).toBe(1000)
})
import { firstLetterUpperCase, lowerCase, upperCase } from '../src';

describe('Case Converters', () => {
    test('firstLetterUpperCase should convert the first letter of each word to uppercase', () => {
        expect(firstLetterUpperCase('hello world')).toBe('Hello World');
        expect(firstLetterUpperCase('TESTING CASE CONVERTERS')).toBe('Testing Case Converters');
    });

    test('lowerCase should convert all letters to lowercase', () => {
        expect(lowerCase('Hello World')).toBe('hello world');
        expect(lowerCase('TESTING CASE CONVERTERS')).toBe('testing case converters');
    });

    test('upperCase should convert all letters to uppercase', () => {
        expect(upperCase('Hello World')).toBe('HELLO WORLD');
        expect(upperCase('testing case converters')).toBe('TESTING CASE CONVERTERS');
    });
});
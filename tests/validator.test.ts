import { isEmail, isDataURL } from '../src';

describe('isEmail', () => {
    test('validates a correct email address', () => {
        expect(isEmail('test@example.com')).toBe(true);
    });

    test('rejects an incorrect email address', () => {
        expect(isEmail('test@example')).toBe(false);
    });

});

describe('isDataURL', () => {
    test('validates a correct data URL', () => {
        expect(isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==')).toBe(true);
    });

    test('rejects an incorrect data URL', () => {
        expect(isDataURL('http://example.com')).toBe(false);
    });
});

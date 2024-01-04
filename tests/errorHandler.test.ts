import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError, NotAuthorizedError, FileTooLargeError, ServerError, serializeErrors } from '../src';

describe('Error Handler', () => {
    const message = 'Test error';
    const comingFrom = 'Test function';

    test('BadRequestError should create a custom error with status code 400', () => {
        const error = BadRequestError(message, comingFrom);
        expect(error.statusCode).toBe(StatusCodes.BAD_REQUEST);
        expect(error.message).toBe(message);
        expect(error.comingFrom).toBe(comingFrom);
    });

    test('NotFoundError should create a custom error with status code 404', () => {
        const error = NotFoundError(message, comingFrom);
        expect(error.statusCode).toBe(StatusCodes.NOT_FOUND);
        expect(error.message).toBe(message);
        expect(error.comingFrom).toBe(comingFrom);
    });

    test('NotAuthorizedError should create a custom error with status code 401', () => {
        const error = NotAuthorizedError(message, comingFrom);
        expect(error.statusCode).toBe(StatusCodes.UNAUTHORIZED);
        expect(error.message).toBe(message);
        expect(error.comingFrom).toBe(comingFrom);
    });

    test('FileTooLargeError should create a custom error with status code 414', () => {
        const error = FileTooLargeError(message, comingFrom);
        expect(error.statusCode).toBe(StatusCodes.REQUEST_TOO_LONG);
        expect(error.message).toBe(message);
        expect(error.comingFrom).toBe(comingFrom);
    });

    test('ServerError should create a custom error with status code 503', () => {
        const error = ServerError(message, comingFrom);
        expect(error.statusCode).toBe(StatusCodes.SERVICE_UNAVAILABLE);
        expect(error.message).toBe(message);
        expect(error.comingFrom).toBe(comingFrom);
    });

    test('serializeErrors should return an object with message, statusCode, and comingFrom properties', () => {
        const error = BadRequestError(message, comingFrom);
        const serializedError = serializeErrors(error);
        expect(serializedError).toEqual({
            message: error.message,
            statusCode: error.statusCode,
            comingFrom: error.comingFrom,
        });
    });
});
import { Request, Response } from 'express';
import { verifyGatewayRequest } from '../src';
import { NotAuthorizedError } from '../src';
import JWT from 'jsonwebtoken';

describe('Gateway Middleware', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    const nextFunction = jest.fn();

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            send: jest.fn(),
        };
    });

    test('verifyGatewayRequest should call next function when request is valid', () => {
        const token = JWT.sign({ id: 'auth', iat: Date.now() }, 'secret');
        mockRequest.headers = {
            authorization: 'Bearer token',
            gatewaytoken: token,
        };

        verifyGatewayRequest(mockRequest as Request, mockResponse as Response, nextFunction);

        expect(nextFunction).toBeCalled();
    });

    test('verifyGatewayRequest should throw NotAuthorizedError when authorization header is missing', () => {
        mockRequest.headers = {};

        expect(() => verifyGatewayRequest(mockRequest as Request, mockResponse as Response, nextFunction)).toThrow(NotAuthorizedError());
    });

    test('verifyGatewayRequest should throw NotAuthorizedError when gatewaytoken is missing', () => {
        mockRequest.headers = {
            authorization: 'Bearer token',
        };

        expect(() => verifyGatewayRequest(mockRequest as Request, mockResponse as Response, nextFunction)).toThrow(NotAuthorizedError());
    });

    test('verifyGatewayRequest should throw NotAuthorizedError when token is invalid', () => {
        mockRequest.headers = {
            authorization: 'Bearer token',
            gatewaytoken: 'invalidtoken',
        };

        expect(() => {
            verifyGatewayRequest(mockRequest as Request, mockResponse as Response, nextFunction);
        }).toThrow(NotAuthorizedError());
    });

    test('verifyGatewayRequest should throw NotAuthorizedError when token payload id is not in tokens array', () => {
        const token = JWT.sign({ id: 'invalid', iat: Date.now() }, 'secret');
        mockRequest.headers = {
            authorization: 'Bearer token',
            gatewaytoken: token,
        };

        expect(() => verifyGatewayRequest(mockRequest as Request, mockResponse as Response, nextFunction)).toThrow(NotAuthorizedError());
    });
});
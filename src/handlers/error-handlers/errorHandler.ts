import { StatusCodes } from 'http-status-codes';
import { CustomHttpError, IError } from '../../interfaces';
import { createCustomError } from './createCustomError';


const BadRequestError = (message: string, comingFrom: string): CustomHttpError => {
    return createCustomError(StatusCodes.BAD_REQUEST, message, comingFrom);
}

const NotFoundError = (message: string, comingFrom: string): CustomHttpError => {
    return createCustomError(StatusCodes.NOT_FOUND, message, comingFrom);
}
const NotAuthorizedError = (
    message: string = 'Invalid request',
    comingFrom: string = 'verifyGatewayRequest')
    : CustomHttpError => {

    return createCustomError(StatusCodes.UNAUTHORIZED, message, comingFrom);
}

const FileTooLargeError = (message: string, comingFrom: string): CustomHttpError => {
    return createCustomError(StatusCodes.REQUEST_TOO_LONG, message, comingFrom);
}

const ServerError = (message: string, comingFrom: string): CustomHttpError => {
    return createCustomError(StatusCodes.SERVICE_UNAVAILABLE, message, comingFrom);
}


const serializeErrors = (error: CustomHttpError): IError => {
    return {
        message: error.message,
        statusCode: error.statusCode,
        comingFrom: error.comingFrom,
    };
}

export {
    BadRequestError,
    NotFoundError,
    NotAuthorizedError,
    FileTooLargeError,
    ServerError,
    serializeErrors,
}

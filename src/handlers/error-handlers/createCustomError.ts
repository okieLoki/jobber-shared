import {
    CustomHttpError
} from '../../interfaces'
import createError from 'http-errors';

const createCustomError = (
    statusCode: number,
    message: string,
    comingFrom: string): CustomHttpError => {

    const error = createError(statusCode, message) as CustomHttpError;
    error.comingFrom = comingFrom;
    return error;
}

export {createCustomError}
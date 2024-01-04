import { HttpError } from 'http-errors'

export interface IErrorResponse {
    message: string;
    statusCode: number;
    comingFrom: string;
    serializeErrors(): IError;
}

export interface IError {
    message: string;
    statusCode: number;
    comingFrom: string;
}

export interface CustomHttpError extends HttpError {
    comingFrom: string;
}


export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}
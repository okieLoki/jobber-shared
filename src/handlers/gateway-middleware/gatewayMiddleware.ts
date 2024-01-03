import JWT from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { NotAuthorizedError } from '../error-handlers'

const tokens: string[] = [
    'auth',
    'seller',
    'gig',
    'search',
    'buyer',
    'message',
    'order',
    'review'
]

type TokenPayload = {
    id: string,
    iat: number,
}

const verifyGatewayRequest = (req: Request, res: Response, next: NextFunction): void => {

    if (!req.headers.authorization) {
        throw NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request not coming from api gateway')
    }
    const token: string = req.headers?.gatewaytoken as string

    if (!token) {
        throw NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request not coming from api gateway')
    }

    try {

        const payload: TokenPayload = JWT.verify(token, "secret") as TokenPayload
        if (!tokens.includes(payload.id)) {
            throw NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request payload is invalid')
        }

    } catch (error) {
        throw NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request is not coming from api gateway')
    }

    next()
}

export {
    verifyGatewayRequest
}
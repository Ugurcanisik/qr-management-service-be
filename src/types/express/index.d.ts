import express from 'express';
import { IUserTokenPayload } from '@models/classes/auth/userTokenPayload';

declare global {
    namespace Express {
        interface Request {
            user?: import('@models/classes/auth/userTokenPayload').IUserTokenPayload;
        }
    }
}

import jwt, { SignOptions } from 'jsonwebtoken';
const JWT_PRIVATE_KEY = process.env.JWT_KEY as String;

const signJwt = (payload: Object, options?: SignOptions) => {
    const privateKey = Buffer.from(JWT_PRIVATE_KEY, 'base64').toString('ascii');
    return jwt.sign(payload, privateKey, {
        ...(options && options)
    });
};

const verifyJwt = <T>(token: string): T | null => {
    try {
        const publicKey = Buffer.from(JWT_PRIVATE_KEY, 'base64').toString('ascii');
        return jwt.verify(token, publicKey) as T;
    } catch (error) {
        return null;
    }
};

export { signJwt, verifyJwt };

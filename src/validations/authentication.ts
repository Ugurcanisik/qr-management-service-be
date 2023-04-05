import { body } from 'express-validator';

const login = [
    body('userName').exists().isString().notEmpty().withMessage('userName is required.'),
    body('password').exists().isString().notEmpty().withMessage('password is required.')
];

export { login };

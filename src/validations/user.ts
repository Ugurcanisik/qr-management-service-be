import { body, param } from 'express-validator';

const get = [param('userNumber').exists().isString().notEmpty().withMessage('userNumber is required.')];

const create = [
    body('firstName').exists().isString().notEmpty().withMessage('name is required.'),
    body('lastName').exists().isString().notEmpty().withMessage('rank is required.'),
    body('userName').exists().isString().notEmpty().withMessage('rank is required.'),
    body('password').exists().isString().notEmpty().withMessage('rank is required.')
];

const update = [
    param('userNumber').exists().isString().notEmpty().withMessage('userNumber is required.'),
    body('firstName').isString().optional(),
    body('lastName').isString().optional(),
    body('userName').isString().optional(),
    body('password').isString().optional()
];

export { get, create, update };

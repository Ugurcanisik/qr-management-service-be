import { body, param } from 'express-validator';

const get = [param('categoryNumber').exists().isString().notEmpty().withMessage('categoryNumber is required.')];

const create = [
    body('name').exists().isString().notEmpty().withMessage('name is required.'),
    body('rank').exists().isNumeric().notEmpty().withMessage('rank is required.')
];

const update = [
    param('categoryNumber').exists().isString().notEmpty().withMessage('categoryNumber is required.'),
    body('name').isString().optional(),
    body('rank').isNumeric().optional(),
    body('isActive').isBoolean().optional()
];

export { get, create, update };

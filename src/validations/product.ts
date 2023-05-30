import { body, param } from 'express-validator';

const get = [param('productNumber').exists().isString().notEmpty().withMessage('productNumber is required.')];

const create = [
    body('name').exists().isString().notEmpty().withMessage('name is required.'),
    body('imageUrl').isString().optional(),
    body('price').isString().optional(),
    body('description').isString().optional(),
    body('rank').isBoolean().optional(),
    body('categoryNumber').exists().isString().notEmpty().withMessage('categoryNumber is required.')
];

const update = [
    param('productNumber').exists().isString().notEmpty().withMessage('productNumber is required.'),
    body('name').isString().optional(),
    body('imageUrl').isString().optional({ nullable: true }),
    body('price').isString().optional(),
    body('description').isString().optional(),
    body('rank').isNumeric().optional(),
    body('categoryNumber').isString().optional(),
    body('isActive').isBoolean().optional()
];

export { get, create, update };

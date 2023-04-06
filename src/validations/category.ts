import { body, param } from 'express-validator';

const getCategory = [param('categoryNumber').exists().isString().notEmpty().withMessage('categoryNumber is required.')];

export { getCategory };

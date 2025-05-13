import { body, validationResult } from 'express-validator';

export const productValidationRules = [
  body('name').isString().notEmpty(),
  body('price').isFloat({ min: 0 }),
];

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

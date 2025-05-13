import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import productRoutes from './routes/productRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import { enforceJson } from './middlewares/jsonMiddleware.js';
import { productValidationRules, validateRequest } from './middlewares/validateProduct/validateRequest.js';
import { ensureAuth } from './middlewares/authMiddleware.js';

const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(enforceJson);

app.use(
  '/api/products',
  productRoutes({
    validateRules: productValidationRules,
    validateRequest,
    ensureAuth
  })
);

app.use(errorHandler);

export default app;

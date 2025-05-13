import express from 'express';
import * as ctrl from '../controllers/productController.js';

export default ({ validateRules, validateRequest, ensureAuth }) => {
  const router = express.Router();

  router.post(
    '/', 
    validateRules, 
    validateRequest, 
    ctrl.createProduct
  );
  router.get('/', ctrl.getProducts);
  router.get('/:id', ctrl.getProductById);
  router.put(
    '/:id', 
    validateRules, 
    validateRequest, 
    ctrl.updateProduct
  );
  router.delete('/:id', ensureAuth, ctrl.deleteProduct);

  return router;
};

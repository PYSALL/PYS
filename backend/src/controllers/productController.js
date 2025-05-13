import { ProductService } from '../services/productService.js';
import { serializeProduct } from '../serializers/productSerializer.js';

export const createProduct = async (req, res, next) => {
  try {
    const created = await ProductService.create(req.body);
    res.status(201).json(serializeProduct(created));
  } catch (err) {
    next(err);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const all = await ProductService.list();
    res.json(all.map(serializeProduct));
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const prod = await ProductService.getById(req.params.id);
    res.json(serializeProduct(prod));
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updated = await ProductService.update(req.params.id, req.body);
    res.json(serializeProduct(updated));
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await ProductService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

import Product from '../models/Product.js';

export class ProductService {
  static async create(data) {
    // Apply any business rules here
    return Product.create(data);
  }

  static async list() {
    return Product.find().lean();
  }

  static async getById(productId) {
    const prod = await Product.findOne({ productId }).lean();
    if (!prod) throw new Error('Product not found');
    return prod;
  }

  static async update(productId, data) {
    const updated = await Product.findOneAndUpdate(
      { productId },
      data,
      { new: true, runValidators: true }
    ).lean();
    if (!updated) throw new Error('Product not found');
    return updated;
  }

  static async remove(productId) {
    const { deletedCount } = await Product.deleteOne({ productId });
    if (!deletedCount) throw new Error('Product not found');
  }
}

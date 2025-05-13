/**
 * Transforms a raw Product document into the API payload.
 * Can also perform domain-level validation here if desired.
 */
export function serializeProduct(prod) {
    return {
      id:          prod.productId,
      name:        prod.name,
      description: prod.description || '',
      price:       prod.price.toFixed(2),
      image:       prod.imageUrl || null,
      createdAt:   prod.createdAt,
      updatedAt:   prod.updatedAt,
    };
  }
  
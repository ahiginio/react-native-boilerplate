export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTERED_PRODUCTS = 'FILTERED_PRODUCTS';

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productID: id,
});
export const filteredProducts = (id) => ({
  type: FILTERED_PRODUCTS,
  categoryID: id,
});

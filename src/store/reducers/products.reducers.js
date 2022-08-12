import { PRODUCTS } from '../../data/products.data';
import { FILTERED_PRODUCTS, SELECT_PRODUCT } from '../actions/products.actions';

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((product) => product.id === action.productID),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;

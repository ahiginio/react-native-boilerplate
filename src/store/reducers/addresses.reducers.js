import { ADDRESSES } from '../../data/addresses.data';
import { SELECT_ADDRESS } from '../actions/category.actions';

const initialState = {
  addresses: ADDRESSES,
  selected: null,
};

const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ADDRESS:
      const AddressIndex = state.addresses.findIndex((address) => address.id === action.addressID);
      if (AddressIndex === -1) return state;
      return { ...state, selected: state.addresses[AddressIndex] };
    default:
      return state;
  }
};

export default AddressReducer;

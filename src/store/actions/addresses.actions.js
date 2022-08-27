export const SELECT_ADDRESS = 'SELECT_ADDRESS';

export const selectAddress = (id) => ({
  type: SELECT_ADDRESS,
  addressID: id,
});

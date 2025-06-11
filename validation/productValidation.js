export const validateProduct = ({ name, price, quantity }) => {
  if (!name || price == null || quantity == null) {
    return 'Name, price, and quantity are required';
  }

  if (price < 0 || quantity < 0) {
    return 'Price and quantity must be non-negative';
  }

  return null;
};

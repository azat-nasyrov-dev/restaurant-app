import { normalizedProducts as defaultProducts } from '../../fixtures';

// eslint-disable-next-line import/no-anonymous-default-export
export default (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};

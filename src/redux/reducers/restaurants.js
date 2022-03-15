import { restaurants as defaultRestaurants } from '../../fixtures';

// eslint-disable-next-line import/no-anonymous-default-export
export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};

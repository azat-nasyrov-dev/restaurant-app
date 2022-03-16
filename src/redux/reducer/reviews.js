import { normalizedReviews as defaultReviews } from '../../fixtures';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};

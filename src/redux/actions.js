import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
} from './constants';

export const increment = id => ({ type: INCREMENT, id });
export const decrement = id => ({ type: DECREMENT, id });
export const remove = id => ({ type: REMOVE, id });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  review,
  restaurantId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

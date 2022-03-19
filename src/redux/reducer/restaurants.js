import produce from 'immer';
import { ADD_REVIEW, LOAD_RESTAURANTS } from '../constants';
import { arrToMap } from '../utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  const { type, restaurantId, reviewId, data } = action;

  switch (type) {
    case LOAD_RESTAURANTS:
      return arrToMap(data);
    case ADD_REVIEW:
      return produce(state, draft => {
        draft[restaurantId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};

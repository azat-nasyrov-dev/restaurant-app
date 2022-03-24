import produce from 'immer';
import {
  ADD_REVIEW,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: [],
  loading: {},
  loaded: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
      draft.error = null;
      draft.loading[restaurantId] = true;
      break;
    }
    case LOAD_REVIEWS + SUCCESS: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      break;
    }
    case LOAD_REVIEWS + FAILURE: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    }
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});

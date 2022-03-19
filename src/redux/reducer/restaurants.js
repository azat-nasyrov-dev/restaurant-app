import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, restaurantId, reviewId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      return produce(state, draft => {
        draft.entities[restaurantId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};

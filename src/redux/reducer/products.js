import produce from 'immer';
import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  entities: [],
  loading: {},
  loaded: {},
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, draft => {
    const { type, restaurantId, data, error } = action;

    switch (type) {
      case LOAD_PRODUCTS + REQUEST: {
        draft.loading[restaurantId] = true;
        break;
      }
      case LOAD_PRODUCTS + SUCCESS: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(data) };
        break;
      }
      case LOAD_PRODUCTS + FAILURE: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });

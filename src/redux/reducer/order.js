import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  MAKE_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, id, error } = action;
  const { entities } = state;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        entities: { ...entities, [id]: (entities[id] || 0) + 1 },
      };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...entities,
          [id]: entities[id] > 0 ? (entities[id] || 0) - 1 : 0,
        },
      };
    case REMOVE:
      return { ...state, entities: { ...entities, [id]: 0 } };
    case MAKE_ORDER + REQUEST:
      return { ...state, loading: true, error: null };
    case MAKE_ORDER + SUCCESS:
      return { ...state, loading: false, loaded: true, entities: {} };
    case MAKE_ORDER + FAILURE:
      return { ...state, loading: false, loaded: false, error };
    default:
      return state;
  }
};

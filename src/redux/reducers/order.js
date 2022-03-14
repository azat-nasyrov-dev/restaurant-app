import { DECREMENT, INCREMENT } from '../constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
};

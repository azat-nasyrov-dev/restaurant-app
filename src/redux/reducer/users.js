import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = arrToMap(normalizedUsers), action) => {
  const { type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      return {
        ...state,
        [userId]: { id: userId, name },
      };

    default:
      return state;
  }
};

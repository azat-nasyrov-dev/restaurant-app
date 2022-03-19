import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = arrToMap(normalizedProducts), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

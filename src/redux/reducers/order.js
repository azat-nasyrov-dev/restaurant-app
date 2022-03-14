import { DECREMENT, INCREMENT } from '../constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default (amount = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return amount + 1;
    case DECREMENT:
      return amount - 1;
    default:
      return amount;
  }
};

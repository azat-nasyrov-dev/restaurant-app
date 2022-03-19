import { v4 as uuid } from 'uuid';

// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => action => {
  if (!action.generateId) return next(action);

  const { generateId, ...rest } = action;
  next({
    ...rest,
    ...generateId.reduce((acc, key) => ({ ...acc, [key]: uuid() }), {}),
  });
};

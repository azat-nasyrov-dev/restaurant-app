import { REQUEST, SUCCESS, FAILURE } from '../constants';

const createPostParams = data => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => async action => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, postData, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const params = postData ? createPostParams(postData) : {};

    const res = await fetch(CallAPI, params);
    const data = await res.json();

    if (!res.ok) throw data;

    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};

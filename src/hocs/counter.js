import React from 'react';

import useAmount from '../hooks/use-amount';

// eslint-disable-next-line import/no-anonymous-default-export
export default WrappedComponent => props => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

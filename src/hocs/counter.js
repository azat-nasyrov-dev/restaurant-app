import React from 'react';

import useAmount from '../hooks/use-amount';

// eslint-disable-next-line import/no-anonymous-default-export
export default WrappedComponent =>
  ({ initialCount = 0, ...props }) => {
    const amountProps = useAmount(initialCount);
    return <WrappedComponent {...props} {...amountProps} />;
  };

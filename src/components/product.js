import React from 'react';
import useAmount from '../hooks/use-amount';

export default function Product(props) {
  const { decrement, increment, amount } = useAmount(0);

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      {amount}
      <button onClick={increment}>+</button>
    </div>
  );
}

import React from 'react';
import counter from '../hocs/counter';

import style from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product(props) {
  const { decrement, increment, amount } = props;

  return (
    <div className={style.card}>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>
        <Minus className={style.icon} />
      </button>
      {amount}
      <button onClick={increment}>
        <Plus className={style.icon} />
      </button>
    </div>
  );
}

export default counter(Product);

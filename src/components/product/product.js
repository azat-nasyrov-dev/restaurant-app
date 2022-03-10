import React from 'react';
import styles from './product.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

import counter from '../../hocs/counter';

const Product = ({ product, amount, increment, decrement }) => (
  <div className={styles.product}>
    <div className={styles.content}>
      <div>
        <h4 className={styles.title}>{product.name}</h4>
        <p className={styles.description}>{product.ingredients.join(', ')}</p>
        <div className={styles.price}>{product.price} $</div>
      </div>
      <div>
        <div className={styles.counter}>
          <div className={styles.count}>{amount}</div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={decrement}>
              <Minus />
            </button>
            <button className={styles.button} onClick={increment}>
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default counter(Product);

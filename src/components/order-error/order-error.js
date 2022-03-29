import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button';

import { orderErrorSelector } from '../../redux/selectors';

import styles from './order-error.module.css';

const OrderError = ({ error }) => (
  <h1 className={styles.page}>
    <p>{error}</p>
    <div className={styles.actions}>
      <Link to="/checkout">
        <Button primary block>
          back to checkout
        </Button>
      </Link>
    </div>
  </h1>
);

export default connect(state => ({
  error: orderErrorSelector(state),
}))(OrderError);

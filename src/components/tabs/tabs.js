import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';

const Tabs = ({ tabs, activeId, onChange }) => (
  <div className={styles.tabs}>
    {tabs.map(({ id, title }) => (
      <span
        key={id}
        className={cn(styles.tab, { [styles.active]: id === activeId })}
        onClick={() => onChange(id)}
      >
        {title}
      </span>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;

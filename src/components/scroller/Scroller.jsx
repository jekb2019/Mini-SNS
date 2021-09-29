import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Scroller.module.css';

const Scroller = memo(({ scrollHandler, icon }) => {
  return (
    <button
      className={styles.btn}
      onClick={scrollHandler}
      data-testid="scroller"
    >
      {icon}
    </button>
  );
});

Scroller.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default Scroller;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Scroller.module.css';

const Scroller = ({ scrollHandler, icon }) => {
  return (
    <button className={styles.btn} onClick={scrollHandler}>
      {icon}
    </button>
  );
};

Scroller.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default Scroller;

import React from 'react';
import styles from './Scroller.module.css';

const Scroller = ({ scrollHandler, icon }) => {
  return (
    <button className={styles.btn} onClick={scrollHandler}>
      {icon}
    </button>
  );
};

export default Scroller;

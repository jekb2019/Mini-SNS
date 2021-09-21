import React from 'react';
import styles from './Scroller.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Scroller = ({ scrollHandler, icon }) => {
  return (
    <button className={styles.btn} onClick={scrollHandler}>
      {icon}
    </button>
  );
};

export default Scroller;

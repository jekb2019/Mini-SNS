import React from 'react';
import styles from './Form.module.css';

const Form = (props) => (
  <div className={styles.wrapper}>
    <input
      className={styles.input}
      placeholder="Lemme know smth 🥸"
      type="text"
    />
    <button className={styles.button}>Post</button>
  </div>
);

export default Form;

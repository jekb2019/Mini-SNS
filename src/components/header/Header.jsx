import React from 'react';
import styles from './Header.module.css';

const Header = ({ isLoggedIn }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title}>Mini SNS</h1>
    {isLoggedIn ? (
      <button className={styles.button}>Log Out</button>
    ) : (
      <button className={styles.button}>Log In</button>
    )}
  </header>
);

export default Header;

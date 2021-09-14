import React from 'react';
import styles from './Header.module.css';

const Header = ({ showLoginModal, user }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title}>Mini SNS</h1>
    {user ? (
      <button className={styles.button}>Log Out</button>
    ) : (
      <button className={styles.button} onClick={showLoginModal}>
        Log In
      </button>
    )}
  </header>
);

export default Header;

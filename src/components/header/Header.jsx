import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

const Header = ({ showLoginModal, user }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title}>Mini SNS</h1>
    {user && <p className={styles.greeting}>{`Hi ${user.username}`}</p>}
    {user ? (
      <button className={styles.button}>Log Out</button>
    ) : (
      <button className={styles.button} onClick={showLoginModal}>
        Log In
      </button>
    )}
  </header>
);

Header.propTypes = {
  showLoginModal: PropTypes.func.isRequired,
  user: PropTypes.object,
};

Header.defaultProps = {
  user: null,
};

export default Header;

import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';
import Button from '../button/Button';

/**
 * Return Button component with given label and onClick handler
 */
const displayButton = (label, onClick) => (
  <div className={styles.btnWrapper}>
    <Button type="shine" size="small" label={label} onClick={onClick} />
  </div>
);

/**
 * Header component does not have any business logic.
 * It is purely UI component
 */
const Header = ({ showLoginModal, username, signout }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title}>MINI SNS</h1>
    {username && <p className={styles.greeting}>{`Hi ${username}`}</p>}
    {username
      ? displayButton('Log out', signout)
      : displayButton('Log in', showLoginModal)}
  </header>
);

Header.propTypes = {
  showLoginModal: PropTypes.func.isRequired,
  username: PropTypes.string,
};

Header.defaultProps = {
  username: null,
};

export default Header;

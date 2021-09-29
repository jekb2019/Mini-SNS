import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';
import Button from '../button/Button';

/**
 * Return Button component with given label and onClick handler
 */
const displayButton = (label, onClick) => (
  <div className={styles.btnWrapper} data-testid="authBtn">
    <Button type="shine" size="small" label={label} onClick={onClick} />
  </div>
);

const Header = ({ login, logout, username }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title} data-testid="headerTitle">
      MINI SNS
    </h1>
    {username && (
      <p
        className={styles.greeting}
        data-testid="greeting"
      >{`Hi ${username}`}</p>
    )}
    {username
      ? displayButton('Log out', logout)
      : displayButton('Log in', login)}
  </header>
);

Header.propTypes = {
  login: PropTypes.func.isRequired, // Run login procedure
  logout: PropTypes.func.isRequired, // Run logout procedure
  username: PropTypes.string, // Username to display in header
};

Header.defaultProps = {
  username: null,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, size, label, onClick }) => (
  <button
    className={`${styles.btn} ${styles[type]} ${styles[size]}`}
    onClick={onClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['shine', 'bounce']),
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'shine',
  size: 'small',
  onClick: undefined,
};

export default Button;

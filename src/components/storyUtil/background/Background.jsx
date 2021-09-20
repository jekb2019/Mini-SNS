import React from 'react';
import PropTypes from 'prop-types';
import styles from './Background.module.css';

const Background = ({ backgroundColor, children }) => (
  <div className={styles[backgroundColor]}>{children}</div>
);

Background.propTypes = {
  backgroundColor: PropTypes.oneOf(['dark', 'light']),
};

export default Background;

import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ placeholder, onPressEnter, value, onChange, inputRef }) => {
  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      onPressEnter(value);
    }
  };

  return (
    <input
      ref={inputRef}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onPressEnter: PropTypes.func, // Run procedures such as onSubmit
  value: PropTypes.string.isRequired, // value to be shown in the input
  onChange: PropTypes.func.isRequired, // handler for changing value
  inputRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Input;

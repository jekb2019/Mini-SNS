import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({
  placeholder,
  onPressEnter,
  value,
  onChange,
  inputRef,
  isRequired,
  size,
  type,
  inputId,
}) => {
  const onKeyPress = (e) => {
    if (e.code === 'Enter' && onPressEnter !== null) {
      onPressEnter(value);
    }
  };

  return (
    <input
      ref={inputRef}
      className={`${styles.input} ${styles[size]}`}
      type={type}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
      required={isRequired}
      id={inputId}
      data-testId="input"
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
  isRequired: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  inputId: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  onPressEnter: null,
  isRequired: false,
  type: 'text',
  inputId: null,
};

export default Input;

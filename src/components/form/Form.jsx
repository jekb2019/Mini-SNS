import React, { memo, useRef } from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import Button from '../button/Button';
import useInput from '../../hooks/useInput';
import submitForm from '../../util/submitForm';

const Form = ({ addPost }) => {
  const inputRef = useRef();
  const [inputVal, setInputValByEvent, setInputValByVal] = useInput('');

  const handleSubmit = async () => {
    if (inputVal === '') {
      inputRef.current.focus();
      return;
    }
    try {
      await submitForm(addPost, inputVal);
    } catch (error) {
      alert(error.message);
    } finally {
      inputRef.current.value = '';
      setInputValByVal('');
    }
  };

  return (
    <div className={styles.wrapper} data-testId="addPostForm">
      <Input
        placeholder="Lemme know smth 🥸"
        onPressEnter={handleSubmit}
        value={inputVal}
        onChange={setInputValByEvent}
        inputRef={inputRef}
        size="medium"
      />
      <div className={styles.btnWrapper}>
        <Button
          type="bounce"
          size="medium"
          label="Post"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

Form.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Form;

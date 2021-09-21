import React, { useRef } from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import Button from '../button/Button';
import useInput from '../../hooks/useInput';
import submitForm from './submitLogic';

const Form = ({ addPost }) => {
  const inputRef = useRef();
  const [inputVal, setInputValByEvent, setInputValByVal] = useInput('');

  const handleSubmit = () => {
    submitForm(inputVal, inputRef, addPost, setInputValByVal);
  };

  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="Lemme know smth 🥸"
        onPressEnter={handleSubmit}
        value={inputVal}
        onChange={setInputValByEvent}
        inputRef={inputRef}
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

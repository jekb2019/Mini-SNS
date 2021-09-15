import React, { useRef } from 'react';
import useInput from '../../util/useInput';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ addPost }) => {
  const inputRef = useRef();
  const [content, setContentByEvent, setContentByVal] = useInput('');

  const onSubmit = async () => {
    if (content !== '') {
      await addPost(content);
      setContentByVal('');
    }
    inputRef.current.focus();
  };

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        onKeyPress={onKeyPress}
        ref={inputRef}
        className={styles.input}
        placeholder="Lemme know smth 🥸"
        type="text"
        onChange={setContentByEvent}
        value={content}
      />
      <button className={styles.button} onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

Form.propTypes = {
  addPost: PropTypes.func,
};

export default Form;

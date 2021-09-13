import React, { useRef, useState } from 'react';
import styles from './Form.module.css';

const Form = ({ addPost }) => {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
    if (content !== '') {
      await addPost(content);
      setContent('');
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
        onChange={onChange}
        value={content}
      />
      <button className={styles.button} onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default Form;

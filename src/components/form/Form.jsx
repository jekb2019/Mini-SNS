import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ addPost }) => {
  const [content, setContent] = useState('');

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
    if (content !== '') {
      await addPost(content);
      setContent('');
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
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

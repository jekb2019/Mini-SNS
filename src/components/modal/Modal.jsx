import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ type, closeModal, openModalType }) => {
  const switchModalType = () => {
    if (type === 'LOG_IN') {
      openModalType('SIGN_UP');
    } else {
      openModalType('LOG_IN');
    }
  };

  return (
    <section className={styles.modal}>
      <p onClick={closeModal} className={styles.close}>
        X
      </p>
      <form className={styles.form}>
        <h1 className={styles.title}>
          {type === 'SIGN_UP' ? 'Sign Up' : 'Log In'}
        </h1>
        <div className={styles.inputSection}>
          <label className={styles.label}>Username</label>
          <input type="text" id="username" className={styles.input} required />
        </div>
        {type === 'SIGN_UP' && (
          <div className={styles.inputSection}>
            <label className={styles.label}>Email</label>
            <input type="text" id="email" className={styles.input} required />
          </div>
        )}
        <div className={styles.inputSection}>
          <label className={styles.label}>Password</label>
          <input type="text" id="password" className={styles.input} required />
        </div>
        <button className={styles.button}>Go</button>
      </form>
      <p className={styles.link} onClick={switchModalType}>
        {type === 'SIGN_UP' ? 'Log In' : 'Sign Up'}
      </p>
    </section>
  );
};

export default Modal;

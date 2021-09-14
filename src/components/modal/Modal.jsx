import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ type, modalTypes, closeModal, openModalType }) => {
  const { MODAL_TYPE_LOG_IN, MODAL_TYPE_SIGN_UP } = modalTypes;

  const switchModalType = () => {
    if (type === MODAL_TYPE_SIGN_UP) {
      openModalType(MODAL_TYPE_LOG_IN);
    } else {
      openModalType(MODAL_TYPE_SIGN_UP);
    }
  };
  return (
    <section className={styles.modal}>
      <p onClick={closeModal} className={styles.close}>
        X
      </p>
      <form className={styles.form}>
        <h1 className={styles.title}>
          {type === MODAL_TYPE_SIGN_UP ? 'Sign Up' : 'Log In'}
        </h1>
        <div className={styles.inputSection}>
          <label className={styles.label}>Username</label>
          <input type="text" id="username" className={styles.input} required />
        </div>
        {type === MODAL_TYPE_SIGN_UP && (
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
        {type === MODAL_TYPE_SIGN_UP ? 'Log In' : 'Sign Up'}
      </p>
    </section>
  );
};

export default Modal;

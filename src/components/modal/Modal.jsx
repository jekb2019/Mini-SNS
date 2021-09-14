import React, { useContext } from 'react';
import { ModalTypeContext } from '../../context/ModalTypeContext';
import styles from './Modal.module.css';

const Modal = ({ closeModal, openModalType }) => {
  const { modalType, setModalType } = useContext(ModalTypeContext);
  // const { MODAL_TYPE_LOG_IN, MODAL_TYPE_SIGN_UP } = modalTypes;

  const switchModalType = () => {
    if (modalType === 'login') {
      openModalType('signup');
    } else {
      openModalType('login');
    }
  };
  return (
    <section className={styles.modal}>
      <p onClick={closeModal} className={styles.close}>
        X
      </p>
      <form className={styles.form}>
        <h1 className={styles.title}>
          {modalType === 'signup' ? 'Sign Up' : 'Log In'}
        </h1>
        <div className={styles.inputSection}>
          <label className={styles.label}>Username</label>
          <input type="text" id="username" className={styles.input} required />
        </div>
        {modalType === 'signup' && (
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
        {modalType === 'signup' ? 'Log In' : 'Sign Up'}
      </p>
    </section>
  );
};

export default Modal;

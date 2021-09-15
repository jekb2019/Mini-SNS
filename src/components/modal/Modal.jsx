import React, { useContext } from 'react';
import { ModalTypeContext } from '../../context/ModalTypeContext';
import LoginForm from '../modalForms/loginForm/LoginForm';
import SignupForm from '../modalForms/signupForm/SignupForm';
import styles from './Modal.module.css';

const Modal = ({ closeModal, openModalType }) => {
  const modalType = useContext(ModalTypeContext);

  const switchModalType = () => {
    if (modalType === 'login') {
      openModalType('signup');
    } else {
      openModalType('login');
    }
  };
  return (
    <div className={styles.wrapper}>
      <section className={styles.modal}>
        <p onClick={closeModal} className={styles.close}>
          X
        </p>
        {modalType === 'signup' ? <SignupForm /> : <LoginForm />}
        <p className={styles.link} onClick={switchModalType}>
          {modalType === 'signup' ? 'Log In' : 'Sign Up'}
        </p>
      </section>
    </div>
  );
};

export default Modal;

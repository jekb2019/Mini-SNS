import React, { useContext } from 'react';
import { ModalTypeContext } from '../../context/ModalTypeContext';
import LoginForm from '../modalForms/loginForm/LoginForm';
import SignupForm from '../modalForms/signupForm/SignupForm';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ signup, signin, closeModal, openModalType }) => {
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
        {modalType === 'signup' ? (
          <SignupForm signup={signup} closeModal={closeModal} />
        ) : (
          <LoginForm signin={signin} closeModal={closeModal} />
        )}
        <p className={styles.link} onClick={switchModalType}>
          {modalType === 'signup' ? 'Log In' : 'Sign Up'}
        </p>
      </section>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModalType: PropTypes.func.isRequired,
};

export default Modal;

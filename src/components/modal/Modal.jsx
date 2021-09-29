import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import LoginForm from '../modalForms/loginForm/LoginForm';
import SignupForm from '../modalForms/signupForm/SignupForm';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ signup, signin, verifyUser }) => {
  const { modalType, openModalType, closeModal } = useContext(ModalContext);

  const switchModalType = () => {
    if (modalType === 'login') {
      openModalType('signup');
    } else {
      openModalType('login');
    }
  };

  return (
    <div className={styles.wrapper} data-testid="modal">
      <section className={styles.modal}>
        <p
          onClick={closeModal}
          className={styles.close}
          data-testid="closeModal"
        >
          X
        </p>
        {modalType === 'signup' ? (
          <SignupForm
            signup={signup}
            closeModal={closeModal}
            verifyUser={verifyUser}
          />
        ) : (
          <LoginForm signin={signin} />
        )}
        <p
          className={styles.link}
          onClick={switchModalType}
          data-testid="switchModal"
        >
          {modalType === 'signup' ? 'Log In' : 'Sign Up'}
        </p>
      </section>
    </div>
  );
};

Modal.propTypes = {
  signin: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default Modal;

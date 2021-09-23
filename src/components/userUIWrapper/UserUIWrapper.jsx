import React from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../context/ModalContext';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import useModal from './useModal';

const UserUIWrapper = ({ verifyUser, signup, signin, signout, user }) => {
  console.log(user);
  const [isModalOpen, modalType, openModalType, closeModal] = useModal(
    null,
    null
  );

  return (
    <>
      <Header
        login={() => {
          openModalType('login');
        }}
        username={user ? user.username : null}
        logout={signout}
      />
      {isModalOpen && (
        <ModalContext.Provider value={{ modalType, openModalType, closeModal }}>
          <Modal verifyUser={verifyUser} signup={signup} signin={signin} />
        </ModalContext.Provider>
      )}
    </>
  );
};

UserUIWrapper.propTypes = {
  verifyUser: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  signout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
};

UserUIWrapper.defaultProps = {
  user: null,
};

export default UserUIWrapper;

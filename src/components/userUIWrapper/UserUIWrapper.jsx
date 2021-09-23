import React, { useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import useModal from './useModal';

const UserUIWrapper = ({ verifyUser, signup, signin, signout, user }) => {
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

export default UserUIWrapper;

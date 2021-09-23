import { useState } from 'react';

const useModal = (initIsOpened, initType) => {
  const [isModalOpen, setIsModalOpen] = useState(initIsOpened);
  const [modalType, setModalType] = useState(initType);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const openModalType = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return [isModalOpen, modalType, openModalType, closeModal];
};

export default useModal;

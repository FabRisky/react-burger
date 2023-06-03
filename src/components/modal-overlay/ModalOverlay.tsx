import {FC, SyntheticEvent} from 'react';
import styles from './modal-overlay.module.scss'

interface IModalOverlay {
  openModal: boolean
  closeModal: () => void
}

const ModalOverlay: FC<IModalOverlay> = ({openModal, closeModal}) => {

  const closeOverlay = (e: SyntheticEvent): void => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      onClick={closeOverlay}
      className={!openModal ? styles.overlay : `${styles.overlay} ${styles.overlayOpen}`}
    />
  );
};

export default ModalOverlay;
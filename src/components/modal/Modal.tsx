import { Dispatch, FC, KeyboardEvent, SetStateAction, useCallback, useEffect } from 'react';
import ModalOverlay from "../modal-overlay/ModalOverlay";
import { Burger } from "../../types/types";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import styles from './modal.module.scss'
import IngredientDetails from "../ingredient-details/IngredientDetails";
import ReactDOM from "react-dom";
import OrderDetails from "../order-details/OrderDetails";

interface IModal {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  currentBurgerIngredient: Burger | null
  setCurrentBurgerIngredient: Dispatch<SetStateAction<Burger | null>>
  setOrder: Dispatch<SetStateAction<boolean>>
  order: boolean
}

const modalRoot = document.getElementById('modal');
const ESC_KEYCODE = 27;

const Modal: FC<IModal> = ({ openModal, setOpenModal, setOrder, order, currentBurgerIngredient, setCurrentBurgerIngredient }) => {
  const closeModal = useCallback(() => {
    setOpenModal(false)
    setOrder(false)
    setCurrentBurgerIngredient(null)
  }, [setOpenModal, setCurrentBurgerIngredient, setOrder])

  const escHandle = useCallback((e: KeyboardEvent<Document>): void => {
    if (e.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  }, [closeModal])

  useEffect(() => {
    document.addEventListener("keydown", escHandle as any);
    return () => {
      document.removeEventListener("keydown", escHandle as any);
    }
  }, [escHandle])

  return ReactDOM.createPortal(
    openModal && (
      <>
        <ModalOverlay openModal={openModal} closeModal={closeModal} />
        <div className={!openModal ? styles.modal : `${styles.modal} ${styles.modalOpen}`}>
          <div
            className={styles.buttonClose}
            onClick={closeModal}
          >
            <CloseIcon type="primary" />
          </div>

          {currentBurgerIngredient && <IngredientDetails currentItem={currentBurgerIngredient} />}
          {order && <OrderDetails />}
        </div>
      </>
    ),
    modalRoot as HTMLElement
  );
};

export default Modal;

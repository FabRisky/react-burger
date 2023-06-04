import React, {useEffect, useState} from 'react';
import Common from "../common/Common";
import AppHeader from '../app-header/app-header';
import {UrlAdress} from "../../utils/dataUtl";
import {Burger} from "../../types/types";
import Modal from "../modal/Modal";

function App() {

  const [items, setItems] = useState([]);
  const [currentBurgerIngredient, setCurrentBurgerIngredient] = useState<Burger | null>(null);

  const [openModal, setOpenModal] = useState(false);
  const [order, setOrder] = useState(false);

  const getData = async () => {
    return await fetch(UrlAdress)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => setItems(data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if(order || currentBurgerIngredient) {
      setOpenModal(true)
    }
  }, [order, currentBurgerIngredient])

  return (
    <>
      <AppHeader/>
      <Common
        openModal={openModal}
        setCurrentBurgerIngredient={setCurrentBurgerIngredient}
        items={items}
        setOrder={setOrder}
      />
      {
        (order || currentBurgerIngredient)
        && <Modal
			    order={order}
			    setOrder={setOrder}
			    openModal={openModal}
			    setCurrentBurgerIngredient={setCurrentBurgerIngredient}
			    setOpenModal={setOpenModal}
			    currentBurgerIngredient={currentBurgerIngredient}/>
      }
    </>
  )
}


export default App;

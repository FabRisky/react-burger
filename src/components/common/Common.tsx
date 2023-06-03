import CommonStyles from './common.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import React, {Dispatch, FC, SetStateAction} from "react";
import {Burger} from "../../types/types";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

interface ICommon {
  items: Burger[]
  openModal: boolean
  setCurrentBurgerIngredient: Dispatch<SetStateAction<Burger | null>>
  setOrder: Dispatch<SetStateAction<boolean>>
}

const Common: FC<ICommon> = ({items, openModal, setOrder, setCurrentBurgerIngredient}) => (
  <div className={CommonStyles.container}>
    <h1 className="text text_type_main-large mb-5 mt-10 ">Соберите бургер</h1>
    <main className={CommonStyles.common}>
      <BurgerIngredients setCurrentBurgerIngredient={setCurrentBurgerIngredient} items={items}/>
      <BurgerConstructor setOrder={setOrder} items={items} openModal={openModal}/>
    </main>
  </div>

);

export default Common;
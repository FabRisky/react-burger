import React, {Dispatch, FC, SetStateAction} from 'react';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyles from './burger-ingredient.module.scss';
import {Burger} from "../../../types/types";

interface BurgerIngredientProps {
  setCurrentBurgerIngredient: Dispatch<SetStateAction<Burger | null>>
  item:Burger
}

const BurgerIngredient: FC<BurgerIngredientProps> = ({item, setCurrentBurgerIngredient}) => {

  const setBurger = (item: Burger) => {
    setCurrentBurgerIngredient(item)
  }


  return (
    <div className={BurgerIngredientStyles.item} onClick={() => setBurger(item)}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={item.image} alt={item.name} />
      <div className={BurgerIngredientStyles.price}>
        <p className={"text text_type_digits-default mt-1 mb-1"}>{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={"text text_type_main-default pb-8" + ' ' + BurgerIngredientStyles.title}>{item.name}</p>
    </div>
  )
}

export default BurgerIngredient;

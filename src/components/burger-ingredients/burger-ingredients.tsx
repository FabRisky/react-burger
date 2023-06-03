import React, {Dispatch, FC, SetStateAction, useMemo, useRef, useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-ingredients.module.scss";
import BurgerIngredient from './burger-ingredient/burger-ingredient';
import {Burger} from "../../types/types";

interface BurgerIngredientsProps {
  items: Burger[];
  setCurrentBurgerIngredient: Dispatch<SetStateAction<Burger | null>>
}

const BurgerIngredients: FC<BurgerIngredientsProps> = ({items, setCurrentBurgerIngredient}) => {

  const [current, setCurrent] = useState<string>('bun');

  const bunRef = useRef<HTMLHeadingElement | null>(null);
  const sauceRef = useRef<HTMLHeadingElement | null>(null);
  const fillingRef = useRef<HTMLHeadingElement | null>(null);

  const bunItems = useMemo(() => items.filter((item: Burger) => item.type === 'bun'), [items]);
  const sauceItems = useMemo(() => items.filter((item: Burger) => item.type === 'sauce'), [items]);
  const ingredientsItems = useMemo(() => items.filter((item: Burger) => item.type === 'main'), [items]);



  const tabClick = (type: string) => {
    setCurrent(type)
    if (type === 'bun') {
      bunRef.current?.scrollIntoView({behavior: "smooth"});
    } else if (type === 'sauce') {
      sauceRef.current?.scrollIntoView({behavior: "smooth"});
    } else {
      fillingRef.current?.scrollIntoView({behavior: "smooth"});
    }

  }

  return (
    <div>
      <div className={`${styles.burger_tabs} mb-10`}>
        <Tab value="bun" active={current === 'bun'} onClick={() => tabClick('bun')}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={() => tabClick('sauce')}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={() => tabClick('main')}>
          Начинки
        </Tab>
      </div>

      <div className={`${styles.category_container} custom-scroll`}>
        <h2 ref={bunRef} className="text text_type_main-medium mb-6">Булки</h2>
        <ul className={styles.category_list_elements}>
          {bunItems?.map((item) => {
            return <li key={item._id}><BurgerIngredient setCurrentBurgerIngredient={setCurrentBurgerIngredient} item={item}/></li>
          })}
        </ul>
        <h2 ref={sauceRef} className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <ul className={styles.category_list_elements}>
          {sauceItems?.map((item) => {
            return <li key={item._id}><BurgerIngredient setCurrentBurgerIngredient={setCurrentBurgerIngredient} item={item}/></li>
          })}
        </ul>
        <h2 ref={fillingRef} className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <ul className={styles.category_list_elements}>
          {ingredientsItems?.map((item) => {
            return <li key={item._id}><BurgerIngredient setCurrentBurgerIngredient={setCurrentBurgerIngredient} item={item}/></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default BurgerIngredients;

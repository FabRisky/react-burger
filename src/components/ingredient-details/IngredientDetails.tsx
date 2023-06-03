import React, {FC} from 'react';
import IngredientDetailsStyles from './ingredient-details.module.scss';
import {Burger} from "../../types/types";
import style from './ingredient-details.module.scss'

interface IngredientDetailsProps {
  currentItem: Burger
}

const IngredientDetails: FC<IngredientDetailsProps> = ({currentItem}) => {
  return (
    <div className={IngredientDetailsStyles.main_container}>
      <div className={IngredientDetailsStyles.main_header}>
        <h2 className={`${style.text} text text_type_main-large`}>Детали ингредиента</h2>
      </div>
      <img height={240} src={currentItem.image_large} className="mb-4" alt={currentItem.name}/>
      <p className={`${style.text} text text_type_main-medium mb-8 mt-4`}>{currentItem.name}</p>
      <div className={IngredientDetailsStyles.composition}>
        <div className={IngredientDetailsStyles.calories}>
          <p className="text text_type_main-small text_color_inactive">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{currentItem.calories}</p>
        </div>
        <div className={IngredientDetailsStyles.elements}>
          <p className="text text_type_main-small text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{currentItem.proteins}</p>
        </div>
        <div className={IngredientDetailsStyles.elements}>
          <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{currentItem.fat}</p>
        </div>
        <div className={IngredientDetailsStyles.elements}>
          <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{currentItem.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

export default IngredientDetails;

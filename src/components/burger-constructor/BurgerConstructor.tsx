import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Dispatch, FC, SetStateAction, useMemo} from "react";
import {Burger} from "../../types/types";
import styles from "./burger-constructor.module.scss";

type BurgerConstructorProps = {
  items: Burger[]
  openModal: boolean
  setOrder: Dispatch<SetStateAction<boolean>>

};

const BurgerConstructor: FC<BurgerConstructorProps> = ({items, setOrder}) => {

  const bun = useMemo(() => items.find((item: Burger) => item.type === 'bun'), [items]);

  return (
    <div className={styles.content}>
      <div className={styles.borderElement}>
        {bun && <ConstructorElement
					type="top"
					isLocked={true}
					text={bun?.name + '\n(верх)'}
					price={bun?.price}
					thumbnail={bun?.image}
				/>}
      </div>
      <ul className={`${styles.list} custom-scroll`}>
        {items.filter(item => item.type !== "bun").map((obj: Burger) => (
            <li key={obj._id} className={styles.element}>
              <DragIcon type="primary"/>
              <ConstructorElement
                text={obj.name}
                price={obj.price}
                thumbnail={obj.image}
              />
            </li>
          ))}
      </ul>
      <div className={`${styles.last} pl-8 mt-4`}>
        {bun && <ConstructorElement
					type="bottom"
					isLocked={true}
					text={bun.name + '\n(низ)'}
					price={bun.price}
					thumbnail={bun.image}
				/>}
      </div>
      <div className={styles.order}>
        <div className={styles.resultSum}>
          <p className="text text_type_digits-medium">610</p>
          <div className={styles.diamond}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => setOrder(true)}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;

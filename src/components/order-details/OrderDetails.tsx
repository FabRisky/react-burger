import {FC} from "react";
import styles from './order.module.scss'
import done from '../../images/done.svg'

const OrderDetails:FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.count} text text_type_digits-large mb-8 mt-20`}>034536</div>
      <div className={`${styles.title} text text_type_main-medium mb-15`}>идентификатор заказа</div>
      <div className="mb-8">
        <img src={done} alt="done"/>
      </div>
      <div className={`${styles.ready} text text_type_main-small mb-2`}>Ваш заказ начали готовить</div>
      <div className={`${styles.text} text text_type_main-small mb-20`}>Дождитесь готовности на орбитальной станции</div>
    </div>
  );
};

export default OrderDetails;


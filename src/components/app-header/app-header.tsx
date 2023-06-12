import React, {FC} from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.scss';


const AppHeader: FC = () => {
  return (
    <header>
      <nav className={headerStyles.headerContainer}>
        <div className={headerStyles.header_menu}>
          <div className={headerStyles.header_menu_left}>
            <ul className={headerStyles.header_menu_left_container}>
              <li className={headerStyles.header_menu_icons_left__constructor_icon}>
                <BurgerIcon type="primary"/>
                <a href="#" className='text text_type_main-default'>Конструктор</a>
              </li>
              <li className={headerStyles.header_menu_icons_left__order_icon}>
                <ListIcon type="secondary"/>
                <a href="#" className='text text_type_main-default text_color_inactive'>Лента заказов</a>
              </li>
            </ul>
          </div>
          <div className={headerStyles.header_menu_icons__center_icon}>
            <Logo/>
          </div>
          <div className={headerStyles.header_menu_icons__right_icons}>
            <span>
              <ProfileIcon type="secondary"/>
                 <p className='text text_type_main-default text_color_inactive'>Личный кабинет</p>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;

import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import AdditionalLinks from './AdditionalLinks/AdditionalLinks';
import './style.scss'

interface MenuProps { }

const Menu: React.FC<MenuProps> = ({ }) => {
   const [addMenu, setAddMenu] = useState(true)

   const changeMenu = (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      setAddMenu(!addMenu)
   }

   return (
      <div className='menu-container'>
         <h5 className='menu-title'>Основное </h5>
         <div className='menu-options'>
            <Link
               to={`/home/main/Catalog/product`}
               className='menu-link'
               onClick={(e) => changeMenu(e)}
            >
               Каталог
               <span
                  className={addMenu == true ? 'btn-catalog active-btn' : 'btn-catalog'}
               >
                  ^
               </span>
            </Link>
            <AdditionalLinks addMenu={addMenu} />
            <NavLink
               to={`/home/main/Orders`}
               className='menu-link'
            >
               Заказы
            </NavLink>
            <NavLink
               to={`/home/main/Customers`}
               className='menu-link'
            >
               Клиенты</NavLink>
            <NavLink
               to={`/home/main/Banners`}
               className='menu-link'
            >
               Баннеры
            </NavLink>
            <NavLink
               to={`/home/main/Promo-codes`}
               className='menu-link'
            >
               Промокоды
            </NavLink>
            <NavLink
               to={`/home/main/Offline-points`}
               className='menu-link'
            >
               Оффлайн точки
            </NavLink>
            <NavLink
               to={`/home/main/Staff`}
               className='menu-link'
            >
               Сотрудники
            </NavLink>
            <NavLink
               to={`/home/main/Mailing`}
               className='menu-link'
            >
               Рассылки
            </NavLink>
         </div>
         <h5 className='menu-title'>Системы</h5>
         <div className='menu-options'>
            <NavLink
               to={`/home/sistem/setting`}
               className='menu-link'
            >
               Настройки
            </NavLink>
            <NavLink
               to={`/home/sistem/users`}
               className='menu-link'
            >
               Пользователи
            </NavLink>
         </div>
      </div>
   );
}
export default Menu;
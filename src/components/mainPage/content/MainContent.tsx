import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu';
import Products from './products/Products';
import './style.scss'

interface MainContentProps { }

const MainContent: React.FC<MainContentProps> = ({ }) => {

   return (
      <section className='content-container'>
         <Menu />
         <Outlet />
      </section>
   );
}

export default MainContent;
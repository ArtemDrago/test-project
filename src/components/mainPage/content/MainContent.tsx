import * as React from 'react';
import Menu from './menu/Menu';
import Products from './products/Products';
import './style.scss'

interface MainContentProps { }

const MainContent: React.FC<MainContentProps> = ({ }) => {

   return (
      <section className='content-container'>
         <Menu />
         <Products />
      </section>
   );
}

export default MainContent;
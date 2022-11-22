import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

interface AdditionalLinksProps {
   addMenu: boolean
}

const AdditionalLinks: React.FC<AdditionalLinksProps> = ({ addMenu }) => {
   return (
      <>
         {addMenu ?
            <>
               <NavLink
                  className='menu-link add-link'
                  to={`/home/main/Catalog/product`}
               >
                  Товары
               </NavLink>
               <NavLink
                  className='menu-link add-link'
                  to={`/home/main/Catalog/category`}
               >
                  Категории
               </NavLink>
            </>
            :
            <></>
         }
      </>
   );
}

export default AdditionalLinks;
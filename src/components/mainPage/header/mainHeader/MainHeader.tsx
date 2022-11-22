import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../logo/Logo';
import Setting from '../setting/Setting';
import './style.scss'

interface MainHeaderProps {

}

const MainHeader: React.FC<MainHeaderProps> = ({ }) => {
   return (
      <>
         <header className='header'>
            <Logo />
            <Setting />
         </header>
         <Outlet />
      </>
   );
}

export default MainHeader;
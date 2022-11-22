
import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../homePage/HomePage';
import MainContent from '../content/MainContent';
import MainHeader from '../header/mainHeader/MainHeader';
import UserPage from '../user/UserPage';
import './style.scss'

export const RootPage = ({ }) => {

   const rerenderUrl = () => {
      const urlPath = document.location.pathname
      if (urlPath != '/') {
         document.location.pathname = '/'
      }
   }

   useMemo(() => {
      rerenderUrl()
   }, [])

   return (
      <div className='container-content'>
         <Routes>
            <Route
               path='/'
               element={<MainHeader />}
            >
               <Route
                  path='/'
                  element={<HomePage />}
               />
               <Route
                  path={`/home/:folder/:path/*`}
                  element={<MainContent />}
               >
               </Route>
               <Route
                  path='/user'
                  element={<UserPage
                  />}
               />
            </Route>
         </Routes>
      </div>
   );
}

export default RootPage;
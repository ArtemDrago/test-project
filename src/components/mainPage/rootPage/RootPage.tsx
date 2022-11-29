import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../homePage/HomePage';
import MainContent from '../content/MainContent';
import Products from '../content/products/Products';
import MainHeader from '../header/mainHeader/MainHeader';
import SettingPage from '../settingAndUsers/setting/SettingPage';
import User from '../settingAndUsers/users/user/User';
import Users from '../settingAndUsers/users/Users';
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
                  path={`/`}
                  element={<MainContent />}
               >
                  <Route
                     path={`/home/main/:path/*`}
                     element={<Products />}
                  />
                  <Route
                     path={`/home/sistem/setting`}
                     element={<SettingPage />}
                  />
                  <Route
                     path={`/home/sistem/users`}
                     element={<Users />}
                  >
                  </Route>
                  <Route
                     path={`/home/sistem/users/:id`}
                     element={<User />}
                  />
               </Route>
            </Route>
         </Routes>
      </div>
   );
}

export default RootPage;
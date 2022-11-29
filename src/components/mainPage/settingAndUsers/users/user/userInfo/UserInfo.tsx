import * as React from 'react';
import { UsersTypeData } from '../../../../../../store/action-creator/users';
import Loader from '../../../../../UIUX/Loader/Loader';
import './style.scss'

interface UserInfoProps {
   data: UsersTypeData | any,
   load: boolean
}

const UserInfo: React.FC<UserInfoProps> = ({ data, load }) => {
   return (
      <>
         {load ?
            <Loader />
            :
            <div className='user-inform-block'>
               <div className='user-inform'>
                  Имя - {data.name}
               </div>
               <div className='user-inform'>
                  Логин - {data.username}
               </div>
               <div className='user-inform'>
                  Email - {data.email}
               </div>
               <div className='user-inform'>
                  Город - {data.address.city}
               </div>
               <div className='user-inform'>
                  Улица - {data.address.street}
               </div>
               <div className='user-inform'>
                  Компания - {data.company.name}
               </div>
               <div className='user-inform'>
                  Сайт - {data.website}
               </div>
            </div>
         }
      </>
   );
}

export default UserInfo;
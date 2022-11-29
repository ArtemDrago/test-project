import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UsersTypeData } from '../../../../../store/action-creator/users';
import Loader from '../../../../UIUX/Loader/Loader';
import './style.scss'

interface UserListProps {
   data: UsersTypeData[] | any[],
   load: boolean,
}

const UserList: React.FC<UserListProps> = ({ data, load }) => {
   return (
      <>
         {load ?
            <Loader />
            :
            <div>
               {data.map((el: UsersTypeData, index: number) =>
                  <Link
                     to={`/home/sistem/users/${el.id}`}
                     key={index}
                     className='user-block'
                  >
                     <div className='userlist-elem'>
                        {el.id}
                     </div>
                     <div
                        className='userlist-elem'
                     >
                        {el.name}
                     </div>
                     <div className='userlist-elem'>
                        {el.phone}
                     </div>
                     <div className='userlist-elem'>
                        {el.website}
                     </div>
                  </Link>
               )}
            </div>
         }

      </>
   );
}

export default UserList;
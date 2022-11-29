import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import useRequest from '../../../../hooks/useRequest';
import './style.scss'
import UserList from './userList/UserList';

function Users() {
   const [list, setList] = useState(10)
   const [folder, setFolder] = useState('user')
   const [data, load, error] = useRequest(fetchUsers, list, folder)

   function fetchUsers() {
      return axios.get('https://jsonplaceholder.typicode.com/users', {
         params: {
            _limit: list
         }
      })
   }

   return (
      <div className='users-container'>
         <div className='way-users'>
            <h3 className='set-title'>Users</h3>
            <UserList data={data} load={load} />
         </div>
      </div>
   );
}

export default Users;
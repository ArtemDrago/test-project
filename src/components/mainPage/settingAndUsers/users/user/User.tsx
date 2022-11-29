import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useRequest from '../../../../../hooks/useRequest';
import './style.scss'
import UserInfo from './userInfo/UserInfo';

function User() {
   const params = useParams()
   const navigate = useNavigate()
   const [folder, setFolder] = useState('user')
   const [data, load, error] = useRequest(fetchUser, 1, folder)

   function fetchUser() {
      return axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
   }

   return (
      <div className='user-info-box'>
         <div className='way-user-info'>
            <div className='btn-box'>
               <Button
                  className='btn-go-back'
                  onClick={() => navigate(-1)}
               >
                  go back
               </Button>
            </div>
            <UserInfo data={data} load={load} />
         </div>
      </div>
   );
}

export default User;
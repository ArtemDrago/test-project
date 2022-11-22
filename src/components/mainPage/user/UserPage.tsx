import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.scss'

interface UserPageProps { }

const UserPage: React.FC<UserPageProps> = ({ }) => {
   return (
      <div className='user-container'>
         <div className='user-box'>
            hello
            <Button style={{ background: 'teal' }}>
               <Link
                  className='link'
                  to='/'
               >
                  go back
               </Link>
            </Button>
         </div>
      </div>
   );
}

export default UserPage;
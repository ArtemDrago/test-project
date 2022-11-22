import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss'

interface SettingProps {

}

const Setting: React.FC<SettingProps> = () => {
   return (
      <div className='setting-container'>
         <Button>
            <Link
               className='link'
               to={'/user'}
            >
               Menu
            </Link>
         </Button>
         <Button>
            Setting
         </Button>
      </div>
   );
}

export default Setting;
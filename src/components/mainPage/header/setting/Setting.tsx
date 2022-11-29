import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss'

interface SettingProps { }

const Setting: React.FC<SettingProps> = () => {
   return (
      <div className='setting-container'>
         <Button>
            Menu
         </Button>
         <Link
            className='btn-set'
            to={`/home/sistem/setting`}
         >
            Setting
         </Link>
      </div>
   );
}

export default Setting;
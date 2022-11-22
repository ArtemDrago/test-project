import * as React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';


function HomePage() {
   return (
      <div className='home-container'>
         <Link
            className='home-link'
            to={'/home/main/Catalog/product'}
         >
            to home
         </Link>
      </div>
   );
}

export default HomePage;
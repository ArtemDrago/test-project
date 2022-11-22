import * as React from 'react';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsPage from './ProductsPage/ProductsPage';
import './style.scss'

interface ProductsProps {

}

const Products: React.FC<ProductsProps> = () => {
   const [way, setWay] = useState('Home')
   const params = useParams()

   useMemo(() => {
      const stringPath = document.location.pathname
      setWay(`${stringPath.slice(1, stringPath.length)}`)
   }, [params])

   return (
      <div className='products-container'>
         <div className='way-products'>
            <h4 className='products-title'>
               Товары
            </h4>
            <span className='way'>
               {way}
            </span>
         </div>
         <ProductsPage />
      </div>
   );
}

export default Products;
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../../../../../../hooks/useRequest';
import { useSearchAndFilter } from '../../../../../../hooks/useSearchAndFilter';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import Loader from '../../../../../UIUX/Loader/Loader';
import ProductItem from './ProductItem/ProductItem';
import './style.scss'

interface ProductListProps {
   search: string,
   filter: string,
}

const ProductList: React.FC<ProductListProps> = ({ search, filter }) => {
   const pathParams = useParams()
   const { products } = useTypeSelector(state => state.products)
   const [list, setList] = useState(17)
   const [data, load, error] = useRequest(fetchProducts, list)
   const arr = useSearchAndFilter(products, filter, search)
   const arrUrl = Object.values(pathParams).join('')


   function fetchProducts() {
      return axios.get('https://jsonplaceholder.typicode.com/todos', {
         params: {
            _limit: list
         }
      })
   }

   const setState = () => {
      const lengthURL = arrUrl.length
      setList(lengthURL || 0)
   }
   useEffect(() => {
      setState()
   }, [arrUrl, data])

   if (error != '') {
      return (
         <div className='error'>
            {error.message}
         </div>
      )
   }
   return (
      <div className='list-container'>
         <div className='list-products'>
            {!load ?
               <section className='section-content'>
                  <div className='section-header'>
                     <span className='header-title'>Id</span>
                     <span className='header-title'>Title</span>
                  </div>
                  <ProductItem productList={arr} />
               </section>
               :
               <div className='loader-container'>
                  <Loader />
               </div>
            }
         </div>
      </div>
   );
}

export default ProductList;
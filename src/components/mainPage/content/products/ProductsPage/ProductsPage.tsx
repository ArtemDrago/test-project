import * as React from 'react';
import { useEffect, useState } from 'react';
import ProductList from './ProductList/ProductList';
import SearchAndFilter from './SearchAndFilter/SearchAndFilter';
import './style.scss'

interface ProductsPageProps {

}

const ProductsPage: React.FC<ProductsPageProps> = () => {
   const [search, setSearch] = useState('')
   const [filter, setFilter] = useState('All')

   return (
      <div className='products-block'>
         <SearchAndFilter
            setSearch={setSearch}
            setFilter={setFilter}
            search={search}
            filter={filter}
         />
         <ProductList
            search={search}
            filter={filter}
         />
      </div>
   );
}

export default ProductsPage;
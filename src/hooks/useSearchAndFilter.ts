import { useMemo } from 'react';
import { ProductDataType } from '../store/action-creator/products';

export const useFilter = (data: ProductDataType[], filter: string) => {
   const filterProducts = useMemo(() => {
      if (filter === 'Even') {
         return data.filter(item => Number.isInteger(item.id / 2))
      } else if (filter === 'Not Even') {
         return data.filter(item => !Number.isInteger(item.id / 2))
      }
      return data
   }, [filter, data])
   return filterProducts
}

export const useSearchAndFilter = (data: ProductDataType[], filter: string, search: string) => {
   const filterProducts: ProductDataType[] = useFilter(data, filter)
   const searchAndFilter = useMemo(() => {
      return filterProducts.filter(product =>
         product.title.toLowerCase().includes(search.toLowerCase())
      )
   }, [search, filterProducts])
   return searchAndFilter
}

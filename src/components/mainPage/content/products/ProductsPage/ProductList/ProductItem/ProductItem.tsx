import * as React from 'react';
import './style.scss'
import { ProductDataType } from '../../../../../../../store/action-creator/products';

interface ProductItemProps {
   productList: ProductDataType[]
}

const ProductItem: React.FC<ProductItemProps> = ({ productList }) => {

   return (
      <>
         {productList.map((elem: ProductDataType, ind: number) =>
            <div
               className='list-item'
               key={ind}
            >
               <span className='item-elem'>
                  {elem.id}
               </span>
               <span className='item-elem'>
                  {elem.title}
               </span>
            </div>
         )}
      </>
   );
}

export default ProductItem;
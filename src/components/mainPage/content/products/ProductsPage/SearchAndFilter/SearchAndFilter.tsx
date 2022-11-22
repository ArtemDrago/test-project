import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ProductDataType } from '../../../../../../store/action-creator/products';
import { addedNewProductsAction } from '../../../../../../store/redusers/productsReduser';
import MyModal from '../../../../../UIUX/modal/MyModal';
import './style.scss'

interface SearchAndFilterProps {
   setFilter: Function,
   setSearch: Function,
   search: string,
   filter: string,
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ setSearch, search, setFilter, filter }) => {
   const [visible, setVisible] = useState(false)
   const [addedState, setAddedState] = useState('')
   const dispatch = useDispatch()

   const addedProduct = (addedState: string) => {
      setVisible(false)
      const cur = new Date()
      const addProduct: ProductDataType = {
         userId: +new Date() - 100000,
         id: +cur - 100000,
         title: addedState,
         completed: false
      }
      setAddedState('')
      dispatch(addedNewProductsAction(
         addProduct
      ))
   }

   return (
      <div className='serch-and-filter'>
         <Form.Control
            className='input-search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search...'
         />
         <Form.Select
            className='select'
            aria-label="All"
            defaultValue={filter}
            onChange={(e) => setFilter(e.target.value)}
         >
            <option value={'All'}>All</option>
            <option value={'Even'}>Even</option>
            <option value={'Not Even'}>Not Even</option>
         </Form.Select>
         <Button
            className='btn-added'
            onClick={() => setVisible(!visible)}
         >
            Add products
         </Button>
         <MyModal
            setVisible={setVisible}
            visible={visible}
         >
            <h3
               className='title-modal'
            >
               добавить товар
            </h3>
            <Form.Control
               value={addedState}
               onChange={(e) => setAddedState(e.target.value)}
               className='modal-input'
               type={'text'}
            />
            <Button
               className='modal-btn'
               onClick={() => addedProduct(addedState)}
            >
               close
            </Button>
         </MyModal>
      </div>
   );
}

export default SearchAndFilter;
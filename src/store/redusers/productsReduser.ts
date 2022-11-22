import { ProductAction, ProductDataType, ProductsActionTypes, ProductsTypeData } from "../action-creator/products"


export const initialState: ProductsTypeData = {
   products: []
}

export const productsReduser = (state = initialState, action: ProductAction) => {
   switch (action.type) {
      case ProductsActionTypes.ADD_PRODUCTS:

         return { ...state, products: [...action.payload] }

      case ProductsActionTypes.ADDED_PRODUCT:
         return { ...state, products: [...state.products, action.payload] }

      default:
         return state
   }
}

export const addProductsAction = (payload: ProductDataType[]) => ({ type: ProductsActionTypes.ADD_PRODUCTS, payload })
export const addedNewProductsAction = (payload: ProductDataType) => ({ type: ProductsActionTypes.ADDED_PRODUCT, payload })

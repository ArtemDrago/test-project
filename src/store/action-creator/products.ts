
export interface ProductDataType {
   userId: number,
   id: number,
   title: string,
   completed: boolean
}

export interface ProductsTypeData {
   products: ProductDataType[]
}

export type ProductAction = AddProductActions | NewAddedProduct

export enum ProductsActionTypes {
   ADD_PRODUCTS = "ADD_PRODUCTS",
   ADDED_PRODUCT = "ADDED_PRODUCT"
}

interface AddProductActions {
   type: ProductsActionTypes.ADD_PRODUCTS;
   payload: ProductDataType[]
}
interface NewAddedProduct {
   type: ProductsActionTypes.ADDED_PRODUCT;
   payload: ProductDataType
}


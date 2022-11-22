import { combineReducers } from "redux";
import { productsReduser } from "./productsReduser";


export const rootReduser = combineReducers({
   products: productsReduser,
})

export type RootState = ReturnType<typeof rootReduser>
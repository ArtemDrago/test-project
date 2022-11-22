import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductDataType } from "../store/action-creator/products";
import { addProductsAction } from "../store/redusers/productsReduser";

export default function (request: any, list: number): [ProductDataType[], boolean, any] {
   const [data, setData] = React.useState<ProductDataType[]>([])
   const [load, setLoad] = useState(false)
   const [error, setError] = useState('')
   const dispatch = useDispatch()

   useEffect(() => {
      setLoad(true)
      setError('')
      request()
         .then((response: any) => setData(response.data))
         .catch((error: any) => setError(error))
         .finally(() => setTimeout(() => {
            setLoad(false)
         }, 2000))
   }, [list])

   useEffect(() => {
      dispatch(addProductsAction(
         data
      ))
   }, [data])

   return [data, load, error]
}
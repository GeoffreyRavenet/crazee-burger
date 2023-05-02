import { useState } from "react"

export const useBasket = () => {
  const [basket, setBasket] = useState([])

  const handleBasketDelete = (idBasketProduct) => {
    const cpBasketProduct = basket
    const updateBasket = cpBasketProduct.filter((item) => item.id !== idBasketProduct)
    setBasket(updateBasket)
  }

  return { basket, setBasket, handleBasketDelete }
}

import { useState } from "react"

export const useBasket = () => {
  const [basket, setBasket] = useState([])

  const handleBasketDelete = (idBasketProduct) => {
    const cpBasketProduct = basket
    const updateBasket = cpBasketProduct.filter((item) => item.id !== idBasketProduct)
    setBasket(updateBasket)
  }

  const handleBasketEdit = (event, selectedProduct) => {
    const { name, value } = event.target
    const cpBaskets = basket
    const editBaskets = cpBaskets.map((item) => {
      if (item.id === selectedProduct.id) {
        return { ...item, [name]: value }
      }
      return item
    })
    setBasket(editBaskets)
  }

  return { basket, setBasket, handleBasketDelete, handleBasketEdit }
}

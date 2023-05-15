import { useState } from "react"
import { deepClone } from "../utils/array.js"

export const useBasket = () => {
  const [basket, setBasket] = useState([])

  const handleDeleteBasket = (idBasketProduct) => {
    const copyBasket = deepClone(basket)
    const updatedBasket = copyBasket.filter((item) => item.id !== idBasketProduct)
    setBasket(updatedBasket)
  }

  const handleEditBasket = (event, selectedProduct) => {
    const { name, value } = event.target
    const copyBaskets = deepClone(basket)
    const editedBasket = copyBaskets.map((item) => {
      if (item.id === selectedProduct.id) {
        return { ...item, [name]: value }
      }
      return item
    })
    setBasket(editedBasket)
  }

  const handleAddToBasket = (productId, products) => {
    const copyProducts = deepClone(products)
    const copyBaskets = deepClone(basket)
    const productToAddInBascket = copyProducts.find((item) => item.id === productId)

    const updatedCartItems = addItemToBasket(copyBaskets, productToAddInBascket)

    setBasket(updatedCartItems)
  }
  const addItemToBasket = (basketItems, itemToAdd) => {
    const existingItemInBasket = basketItems.find((item) => item.id === itemToAdd.id)
    if (existingItemInBasket) {
      existingItemInBasket.quantity += 1
      return [...basketItems]
    }

    return [{ ...itemToAdd, quantity: 1 }, ...basketItems]
  }

  return { basket, handleDeleteBasket, handleEditBasket, handleAddToBasket }
}

import { useState } from "react"
import { deepClone, findIndexById, findObjectById } from "../utils/array.js"

export const useBasket = () => {
  const [basket, setBasket] = useState([])

  const handleAddToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
      return
    }

    createNewBasketProduct(idProductToAdd, basketCopy)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    setBasket(newBasket)
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

  const handleDeleteBasket = (idBasketProduct) => {
    const copyBasket = deepClone(basket)
    const updatedBasket = copyBasket.filter((item) => item.id !== idBasketProduct)
    setBasket(updatedBasket)
  }
  return { basket, handleDeleteBasket, handleEditBasket, handleAddToBasket }
}

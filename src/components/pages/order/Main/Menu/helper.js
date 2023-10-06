import { findObjectById } from "../../../../../utils/array.js"
import { roundNumber } from "../../../../../utils/maths.js"

export const checkIfProductIsClicked = (idProductInMenu, idProductClickedOn) => {
  return idProductInMenu === idProductClickedOn
}

export const calculateSumToPay = (basket, products) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, products)
    if (isNaN(menuProduct.price)) return total
    total += roundNumber(menuProduct.price) * basketProduct.quantity
    return total
  }, 0)
}

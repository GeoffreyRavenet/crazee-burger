import { findObjectById } from "../../../../../utils/array.js"
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths.js"

export const checkIfProductIsClicked = (idProductInMenu, idProductClickedOn) => {
  return idProductInMenu === idProductClickedOn
}

export const calculateSumToPay = (basket, products) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, products)
    const price = replaceFrenchCommaWithDot(menuProduct.price)
    if (isNaN(price)) return total
    console.log(typeof price, price)
    total += price * basketProduct.quantity
    return total
  }, 0)
}

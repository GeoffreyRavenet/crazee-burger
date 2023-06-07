import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../enums/product.js"
import { deepClone } from "../utils/array.js"

export const useMenu = () => {
  const [products, setProducts] = useState(fakeMenu.LARGE)
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT)

  const handleAdd = (newProductToAdd) => {
    // 1 . copie du tableau
    const productsCopy = deepClone(products)
    // 2 . manip de la copie du tableau
    const menuUpdated = [newProductToAdd, ...productsCopy]
    // 3 . update du state
    setProducts(menuUpdated)
  }

  const handleDelete = (productId) => {
    // 1 . copie du tableau
    const productsCopy = deepClone(products)
    // 2 . manip de la copie du tableau
    const menuUpdated = productsCopy.filter((item) => item.id !== productId)
    // 3 . update du state
    setProducts(menuUpdated)
    setSelectedProduct(EMPTY_PRODUCT)
  }

  const handleEdit = (event, selectedProduct) => {
    const { name, value } = event.target
    const cpProducts = products
    const editProducts = cpProducts.map((item) => {
      if (item.id === selectedProduct.id) {
        return { ...item, [name]: value }
      }
      return item
    })
    setProducts(editProducts)
  }

  const resetMenu = () => {
    setProducts(fakeMenu.MEDIUM)
  }

  return {
    handleAdd,
    handleDelete,
    resetMenu,
    products,
    setProducts,
    handleEdit,
    selectedProduct,
    setSelectedProduct,
  }
}

import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import OrderContext from "../../../context/OrderContext.jsx"
import { fakeMenu2 } from "../../../fakeData/fakeMenu.js"

export default function OrderPage() {
  //state
  const [isAdmin, setIsAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu2)
  //comportements
  const handleAdd = (newProductToAdd) => {
    // 1 . copie du tableau
    const productsCopy = [...products]
    // 2 . manip de la copie du tableau
    const menuUpdated = [newProductToAdd, ...productsCopy]
    // 3 . update du state
    setProducts(menuUpdated)
  }

  const handleDelete = (productId) => {
    // 1 . copie du tableau
    const productsCopy = [...products]
    // 2 . manip de la copie du tableau
    const menuUpdated = productsCopy.filter((item) => item.id !== productId)
    // 3 . update du state
    setProducts(menuUpdated)
  }

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    setProducts,
    handleAdd,
    handleDelete,
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    width: 100%;
    max-width: 1400px;
    height: 95vh;

    ::before {
      content: "";
      background: ${theme.colors.primary};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`

import React, { useRef, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import OrderContext from "../../../context/OrderContext.jsx"
import { useMenu } from "../../../hooks/useMenu.js"
import { EMPTY_PRODUCT } from "../../../enums/product.js"
import { useBasket } from "../../../hooks/useBasket.js"

export default function OrderPage() {
  //state
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("edit")
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT)
  const [product, setProduct] = useState(EMPTY_PRODUCT)

  const titleEditRef = useRef()
  const { handleAdd, handleDelete, resetMenu, products, setProducts, handleEdit } = useMenu()
  const { basket, setBasket, handleBasketDelete } = useBasket()
  //comportements

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
    resetMenu,
    product,
    setProduct,
    selectedProduct,
    setSelectedProduct,
    titleEditRef,
    handleEdit,
    basket,
    setBasket,
    handleBasketDelete,
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
  background-image: url("/images/pattern-burger.png");
  background-size: 200px 150px;
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

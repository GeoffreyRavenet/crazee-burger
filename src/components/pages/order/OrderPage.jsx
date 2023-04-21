import React, { useRef, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import OrderContext from "../../../context/OrderContext.jsx"
import { useMenu } from "../../../hooks/useMenu.js"

const EMPTY_PRODUCT = {
  id: "100000000",
  imageSource: "",
  title: "",
  price: "",
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
}

export default function OrderPage() {
  //state
  const [isAdmin, setIsAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("edit")
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT)
  const [product, setProduct] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const { handleAdd, handleDelete, resetMenu, products, setProducts, handleEdit } = useMenu()

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

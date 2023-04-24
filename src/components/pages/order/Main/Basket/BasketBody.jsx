import React, { useContext } from "react"
import styled from "styled-components"
import BasketEmptyMessage from "./BasketEmptyMessage.jsx"
import OrderContext from "../../../../../context/OrderContext.jsx"
import BasketMenu from "./BasketMenu.jsx"

export default function BasketBody() {
  const { basket } = useContext(OrderContext)
  return <BasketBodyStyled>{basket ? <BasketMenu /> : <BasketEmptyMessage />}</BasketBodyStyled>
}
const BasketBodyStyled = styled.div`
  flex: 1;
  background: #f5f5f7;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
`

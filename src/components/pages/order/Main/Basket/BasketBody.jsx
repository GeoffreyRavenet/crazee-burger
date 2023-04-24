import React, { useContext } from "react"
import styled from "styled-components"
import BasketEmptyMessage from "./BasketEmptyMessage.jsx"
import OrderContext from "../../../../../context/OrderContext.jsx"
import BasketMenu from "./BasketMenu.jsx"
import { theme } from "../../../../../theme/index.js"

export default function BasketBody() {
  const { basket } = useContext(OrderContext)
  return (
    <BasketBodyStyled>
      {basket.length > 0 ? <BasketMenu /> : <BasketEmptyMessage />}
    </BasketBodyStyled>
  )
}
const BasketBodyStyled = styled.div`
  height: calc(((85vh - 70px) - 50px) - 20px);
  background: ${theme.colors.background_white};
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`

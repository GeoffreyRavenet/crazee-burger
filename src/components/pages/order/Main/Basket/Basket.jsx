import React, { useContext } from "react"
import styled from "styled-components"

import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.jsx"
import BasketBody from "./BasketBody.jsx"
import OrderContext from "../../../../../context/OrderContext.jsx"
import Total from "./Total"

export default function Basket() {
  const { basket } = useContext(OrderContext)
  const totalPrice = basket.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.price > 0 ? currentValue.price * currentValue.quantity : 0),
    0
  )

  return (
    <BasketStyled>
      <Total totalPrice={formatPrice(totalPrice)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

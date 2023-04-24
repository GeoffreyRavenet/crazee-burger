import React, { useContext } from "react"
import styled from "styled-components"

import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.jsx"
import BasketBody from "./BasketBody.jsx"
import OrderContext from "../../../../../context/OrderContext.jsx"
import Total from "./Total"

export default function Basket() {
  const { basket } = useContext(OrderContext)
  const commandFilterNotNull = basket.filter((item) => item.price > 0)
  const totalPrice = commandFilterNotNull.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
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

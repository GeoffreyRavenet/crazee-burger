import React from "react"
import styled from "styled-components"
import Total from "./Total.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.jsx"
import BasketBody from "./BasketBody.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <Total totalPrice={formatPrice()} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`

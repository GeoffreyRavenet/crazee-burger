import React, { useContext } from "react"
import styled from "styled-components"
import Header from "../../../../reusable-ui/Header.jsx"
import { theme } from "../../../../../theme/index.js"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { calculateSumToPay } from "../Menu/helper.js"
import { formatPrice } from "../../../../../utils/maths.js"

export default function Total() {
  const { basket, products } = useContext(OrderContext)

  const totalPrice = calculateSumToPay(basket, products)

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="price">{formatPrice(totalPrice)}</span>
      </TotalStyled>
    </Header>
  )
}
const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Amatic SC";
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  line-height: 45px;
  letter-spacing: 2px;

  color: ${theme.colors.primary};
  .price {
    font-weight: ${theme.fonts.weights.bold};
  }
`

import React from "react"
import styled from "styled-components"
import BasketCard from "../../../../reusable-ui/BasketCard.jsx"
import { formatPrice } from "../../../../../utils/maths.js"

export default function BasketMenu() {
  return (
    <BasketMenuStyled>
      <BasketCard title="test" price={formatPrice()} quantity="2" img="/images/wedges1.png" />
    </BasketMenuStyled>
  )
}
const BasketMenuStyled = styled.div`
  margin: 20px 16px;
`

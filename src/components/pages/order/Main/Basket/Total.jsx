import React from "react"
import styled from "styled-components"
import Header from "../../../../reusable-ui/Header.jsx"
import { theme } from "../../../../../theme/index.js"

export default function Total({ totalPrice }) {
  return (
    <Header>
      <TotalStyled>
        <span>Total</span>
        <span>{totalPrice}</span>
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
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P4};
  line-height: 45px;
  letter-spacing: 2px;

  color: ${theme.colors.primary};
`

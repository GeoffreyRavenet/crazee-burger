import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme/index.js"

export default function BasketEmptyMessage() {
  return <BasketEmptyMessageStyled>Votre commande est vide.</BasketEmptyMessageStyled>
}
const BasketEmptyMessageStyled = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  align-self: center;
  justify-content: center;
  font-family: "Amatic SC";
  font-size: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  line-height: 2;
  color: ${theme.colors.greyBlue};
`

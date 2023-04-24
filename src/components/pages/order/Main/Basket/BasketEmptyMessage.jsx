import React from "react"
import styled from "styled-components"

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
  font-weight: 400;
  font-size: 36px;
  line-height: 2;
  color: #747b91;
`

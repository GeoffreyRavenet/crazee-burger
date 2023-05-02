import React from "react"
import styled from "styled-components"

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span className="EmptyMessage">Votre commande est vide.</span>{" "}
    </BasketBodyStyled>
  )
}
const BasketBodyStyled = styled.div`
  flex: 1;
  background: #f5f5f7;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  .EmptyMessage {
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
  }
`

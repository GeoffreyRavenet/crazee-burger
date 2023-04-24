import React from "react"
import styled from "styled-components"
import Total from "./Total.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <Total totalPrice={formatPrice()} />
      <div className="body">Votre commande est vide.</div>
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC";
  font-style: normal;

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #f5f5f7;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);

    font-weight: 400;
    font-size: 36px;
    line-height: 72px;
    color: #747b91;
  }
`

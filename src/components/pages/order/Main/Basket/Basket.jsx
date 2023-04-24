import React from "react"
import styled from "styled-components"

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <span>Total</span>
        <span>0,00€</span>
      </div>
      <div className="body">Votre commande est vide.</div>
      <div className="footer">Codé avec ❤️ et React.JS</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC";
  font-style: normal;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background: #292729;
    height: 70px;

    font-weight: 700;
    font-size: 36px;
    line-height: 45px;

    letter-spacing: 2px;

    color: #ffa01b;
  }
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
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #292729;
    height: 70px;

    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
  }
`

import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Main from "./Main.jsx"
import Navbar from "./Navbar"

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <Navbar />
      <Main />
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  width: 1400px;
  height: 95vh;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  ::before {
    content: "";
    background: ${theme.colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`

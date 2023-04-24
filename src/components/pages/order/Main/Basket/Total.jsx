import React from "react"
import styled from "styled-components"
import Header from "../../../../reusable-ui/Header.jsx"

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
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 2px;

  color: #ffa01b;
`

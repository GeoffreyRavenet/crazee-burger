import React from "react"
import styled from "styled-components"
import { HiCursorClick } from "react-icons/hi"

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  )
}

const HintMessageStyled = styled.div`
  font-family: "Amatic SC";
  font-size: 24px;
  line-height: 30px;
  color: #747b91;
  span {
    padding-right: 9px;
  }
`

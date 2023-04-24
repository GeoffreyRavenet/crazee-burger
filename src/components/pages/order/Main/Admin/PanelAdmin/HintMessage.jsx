import React from "react"
import styled from "styled-components"
import { HiCursorClick } from "react-icons/hi"
import { theme } from "../../../../../../theme/index.js"

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
  font-size: ${theme.fonts.size.P3};
  line-height: 30px;
  color: ${theme.colors.greyBlue};
  span {
    padding-right: 9px;
  }
`

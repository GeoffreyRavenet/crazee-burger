import React from "react"
import styled from "styled-components"
import Header from "../../../../reusable-ui/Header.jsx"
import { theme } from "../../../../../theme/index.js"

export default function Footer() {
  return (
    <Header>
      <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>
    </Header>
  )
}
const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Amatic SC";
  font-size: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P2};
  line-height: 25px;
  color: ${theme.colors.white};
`

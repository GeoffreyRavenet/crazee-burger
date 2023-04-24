import React from "react"
import styled from "styled-components"
import Header from "../../../../reusable-ui/Header.jsx"

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
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`

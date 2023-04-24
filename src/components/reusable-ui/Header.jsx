import React from "react"
import styled from "styled-components"

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  background: #292729;
  height: 70px;
  padding: 0 16px;
`

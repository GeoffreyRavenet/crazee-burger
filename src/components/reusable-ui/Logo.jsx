import styled from "styled-components"
import { theme } from "../../theme/index.js"

export default function Logo() {
  return (
    <LogoStyled className="logo">
      <h1>crazee</h1>
      <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
      <h1>burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary_burger};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`

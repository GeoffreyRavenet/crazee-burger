import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Leftside from "./Leftside.jsx"
import Rightside from "./Rightside.jsx"

export default function Navbar() {
  return (
    <NavbarStyled>
      <Leftside />
      <Rightside />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: white;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
`

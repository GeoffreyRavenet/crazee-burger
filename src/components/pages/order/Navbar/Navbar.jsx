import styled from "styled-components"
import { theme } from "../../../../theme/index"
import { refreshPage } from "../../../../utils/windows"
import Logo from "../../../reusable-ui/Logo"
import Rightside from "./Rightside"

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-nav" onClick={refreshPage} />
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
  border-bottom: 1px solid ${theme.colors.greyLight};
  z-index: 3;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 10%);
  .logo-nav {
    cursor: pointer;
    margin-left: 20px;
  }
`

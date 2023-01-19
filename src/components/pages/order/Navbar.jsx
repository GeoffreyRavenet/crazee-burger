import styled from "styled-components"
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

const NavbarStyled = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px 15px 0px 0px;
`

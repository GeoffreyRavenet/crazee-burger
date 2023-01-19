import styled from "styled-components"
import Logo from "../../reusable-ui/Logo.jsx"
import { useNavigate } from "react-router"

export default function Leftside() {
  const navigate = useNavigate()

  return (
    <LeftSideStyled onClick={() => navigate(0)}>
      <Logo />
    </LeftSideStyled>
  )
}

const LeftSideStyled = styled.div`
  cursor: pointer;
  margin-left: 20px;
`

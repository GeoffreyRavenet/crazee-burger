import styled from "styled-components"
import Profile from "./Profile"

export default function Rightside() {
  return (
    <RightsideStyled>
      <Profile />
    </RightsideStyled>
  )
}

const RightsideStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`

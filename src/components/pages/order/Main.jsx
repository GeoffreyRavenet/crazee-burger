import styled from "styled-components"
import { theme } from "../../../theme/index"
import ShoppingList from "./ShoppingList"

export default function Main() {
  return (
    <MainStyled>
      <ShoppingList />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  flex: 1;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`

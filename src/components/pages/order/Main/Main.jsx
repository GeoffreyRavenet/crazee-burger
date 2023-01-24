import styled from "styled-components"
import { theme } from "../../../../theme/index"
import Menu from "./Menu"

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="Basket">Basket</div> */}
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  flex: 1;
  height: 85vh;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-columns: 25% 1fr; */
`

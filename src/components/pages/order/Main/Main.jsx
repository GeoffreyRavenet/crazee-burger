import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../context/OrderContext"
import Basket from "./Basket/Basket.jsx"
import { theme } from "../../../../theme/index"
import Admin from "./Admin/Admin"
import Menu from "./Menu/Menu"

export default function Main() {
  //state
  const { isAdmin } = useContext(OrderContext)

  //comportement

  //Affichage
  //<div className="basket">Basket</div>
  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  flex: 1;
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  //  box-shadow: ${theme.shadows.strong};

  display: grid;
  overflow-y: hidden;
  grid-template-columns: 350px 1fr;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .menu-and-admin {
    box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`

import { useContext, useState } from "react"
import styled from "styled-components"
import OrderContext from "../../../../context/OrderContext"
import MainContext from "../../../../context/MainContext.jsx"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js"
import { theme } from "../../../../theme/index"
import Admin from "./Admin/Admin"
import Menu from "./Menu"

export default function Main() {
  const { isAdmin } = useContext(OrderContext)
  const [products, setProducts] = useState(fakeMenu2)

  const mainContextValue = {
    products,
    setProducts,
  }

  return (
    <MainContext.Provider value={mainContextValue}>
      <MainStyled>
        <div className="basket">Basket</div>
        <div className="menu-and-admin">
          <Menu />
          {isAdmin && <Admin />}
        </div>
      </MainStyled>
    </MainContext.Provider>
  )
}

const MainStyled = styled.div`
  flex: 1;
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  overflow-y: hidden;
  /* grid-template-columns: 1fr;*/
  grid-template-columns: 25% 1fr;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  .basket {
    background: pink;
  }
  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`

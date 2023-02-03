import React, { useState } from "react"
import styled from "styled-components"
import IsToggledContext from "../../../context/IsToggledContext"
import IsPanelContext from "../../../context/IsPanelContext"
import { theme } from "../../../theme/index"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"

export default function OrderPage() {
  const [isToggled, setIsToggled] = useState(false)
  const isToggledContext = {
    isToggled,
    setIsToggled,
  }
  const [isOpen, setIsOpen] = useState(true)
  const [isTabMenu, setIsTabMenu] = useState("add")
  const isPanelContext = {
    isOpen,
    setIsOpen,
    isTabMenu,
    setIsTabMenu,
  }

  return (
    <OrderPageStyled>
      <div className="container">
        <IsToggledContext.Provider value={isToggledContext}>
          <Navbar />
          <IsPanelContext.Provider value={isPanelContext}>
            <Main />
          </IsPanelContext.Provider>
        </IsToggledContext.Provider>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    width: 100%;
    max-width: 1400px;
    height: 95vh;

    ::before {
      content: "";
      background: ${theme.colors.primary};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`

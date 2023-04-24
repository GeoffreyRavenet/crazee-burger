import React, { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme/index"
import { getTabsConfig, getTabSelected } from "../tabsConfig"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"

export default function AdminPanel() {
  const { currentTabSelected, selectedProduct } = useContext(OrderContext)
  const hasAlreadyBeenClicked = selectedProduct !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding-left: 71px;
  display: flex;
  align-items: center;
`

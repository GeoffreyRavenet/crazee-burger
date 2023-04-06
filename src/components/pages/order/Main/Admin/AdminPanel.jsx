import React, { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"
import { theme } from "../../../../../theme/index.js"

export default function AdminPanel() {
  const { isTabMenu } = useContext(OrderContext)

  return (
    <AdminPanelStyled>
      {isTabMenu.includes("add") ? <AddProduct /> : <EditProduct />}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`

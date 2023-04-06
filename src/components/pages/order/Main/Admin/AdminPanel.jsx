import React, { useContext } from "react"
import styled from "styled-components"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import PanelButton from "../../../../reusable-ui/PanelButton"
import isPanelContext from "../../../../../context/IsPanelContext"
import AddProduct from "./AddProduct.jsx"
import EditProduct from "./EditProduct.jsx"
import { theme } from "../../../../../theme/index.js"

export default function AdminPanel() {
  const { isOpen, setIsOpen, isTabMenu, setIsTabMenu } = useContext(isPanelContext)

  const openMenu = (index) => {
    setIsTabMenu(index)
    setIsOpen(true)
  }

  const panels = [
    {
      onClick: () => setIsOpen(!isOpen),
      icon: isOpen ? <FiChevronDown className="icon" /> : <FiChevronUp className="icon" />,
      className: !isOpen ? "active" : null,
    },
    {
      onClick: () => openMenu("add"),
      icon: <AiOutlinePlus className="icon" />,
      className: isTabMenu.includes("add") ? "active" : null,
      label: "Ajouter un produit",
    },
    {
      onClick: () => openMenu("edit"),
      icon: <MdModeEditOutline className="icon" />,
      className: isTabMenu.includes("edit") ? "active" : null,
      label: "Modifier un produit",
    },
  ]

  return <AdminPanelStyled></AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`

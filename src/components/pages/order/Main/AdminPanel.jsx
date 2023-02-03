import React, { useContext } from "react"
import styled from "styled-components"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import PanelButton from "../../../reusable-ui/PanelButton"
import isPanelContext from "../../../../context/IsPanelContext"
import AddProduct from "./AddProduct.jsx"
import EditProduct from "./EditProduct.jsx"

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

  return (
    <AdminPanelStyled>
      <nav>
        {panels.map((item, index) => (
          <PanelButton
            key={index}
            onClick={item.onClick}
            Icon={item.icon}
            active={item.className}
            label={item.label}
          />
        ))}
      </nav>
      <div style={{ display: isOpen ? "block" : "none" }}>
        {isTabMenu.includes("add") ? <AddProduct /> : null}
        {isTabMenu.includes("edit") ? <EditProduct /> : null}
      </div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  nav {
    margin-left: 71px;
    .active {
      background: #292729;
      border: 1px solid #292729;
      color: #ffffff;
    }
  }

  div {
    background: white;
    height: 250px;
    border: 1px solid #e4e5e9;
    box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 15px 15px;
  }
`

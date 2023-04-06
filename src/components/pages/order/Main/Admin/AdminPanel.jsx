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

  return (
    <AdminPanelStyled>
      <nav className={isOpen ? "open" : "close"}>
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
      <div className="bodyPanel" style={{ display: isOpen ? "block" : "none" }}>
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
  .close {
    position: relative;
    button {
      border-bottom: 2px solid #fff;
      .active {
        border-bottom: 1px solid #292729;
      }
    }
  }
  nav {
    margin-left: 71px;
    position: absolute;
    margin-top: -41px;

    .active {
      background: #292729;
      border: 2px solid #292729;
      color: #ffffff;
    }
    button {
      background: white;
      border: 2px solid #e4e5e9;

      :hover {
        text-decoration: underline;
        border-bottom: 2px solid transparent;
      }
    }
  }

  .bodyPanel {
    background: ${theme.colors.white};
    height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
  }
`

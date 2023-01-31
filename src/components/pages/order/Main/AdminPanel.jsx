import React, { useState } from "react"
import styled from "styled-components"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import PanelButton from "../../../reusable-ui/PanelButton"

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(1)

  const panels = [
    {
      onClick: () => setIsOpen(!isOpen),
      icon: isOpen ? <FiChevronDown className="icon" /> : <FiChevronUp className="icon" />,
      className: isOpen ? "active" : null,
    },
    {
      onClick: () => setIsOpenMenu(1),
      icon: <AiOutlinePlus className="icon" />,
      className: isOpenMenu === 1 ? "active" : null,
      label: "Ajouter un produit",
    },
    {
      onClick: () => setIsOpenMenu(2),
      icon: <MdModeEditOutline className="icon" />,
      className: isOpenMenu === 2 ? "active" : null,
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
      <div style={{ display: isOpen ? "block" : "none" }}></div>
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
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 15px 15px;
  }
`

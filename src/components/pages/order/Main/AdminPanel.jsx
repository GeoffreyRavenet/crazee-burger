import React, { useState } from "react"
import styled from "styled-components"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AdminPanelStyled>
      <nav>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiChevronDown className="icon" /> : <FiChevronUp className="icon" />}
        </button>
        <button>
          <AiOutlinePlus className="icon" />
          ajouter un produit
        </button>
        <button>
          <MdModeEditOutline className="icon" />
          modifier un produit
        </button>
      </nav>
      <div style={{ display: isOpen ? "block" : "none" }}></div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  //border: 1px solid red;
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  nav {
    margin-left: 71px;
    button {
      min-width: 59px;
      min-height: 42px;
      background: #fff;
      color: #93a2b1;
      border: 1px solid #93a2b1;
      border-radius: 5px 5px 0px 0px;
    }
  }
  div {
    border: 1px solid green;
    background: white;
    height: 250px;
  }
`

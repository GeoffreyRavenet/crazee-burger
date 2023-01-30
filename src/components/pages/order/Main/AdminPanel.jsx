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
      <div style={{ display: isOpen ? "block" : "none" }}>
        <li>Accueil</li>
        <li>À propos</li>
        <li>Contact</li>
      </div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  //border: 1px solid red;
  nav {
    //border: 1px solid blue;
    display: flex;
    button {
      flex-direction: row-reverse;
      background: #fff;
      color: #93a2b1;
      border: 1px solid #93a2b1;
      border-radius: 5px 5px 0px 0px;
    }
  }
  div {
    border: 1px solid green;
    background: white;
  }
`

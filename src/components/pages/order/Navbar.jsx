import { useParams } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Leftside from "./Leftside.jsx"

export default function Navbar() {
  const { username } = useParams()

  return (
    <NavbarStyled>
      <Leftside />

      <div className="right">
        <h1>Bonjour {username}</h1>
        <Link to={`/`}>
          <button>Déconnection</button>
        </Link>
      </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;

  .right {
  }
`

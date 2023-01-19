import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme/index.js"

export default function Rightside() {
  const { username } = useParams()

  return (
    <RightsideStyled>
      <div className="left">
        <h2>
          <span>Hey, </span>
          <span className="name">{username}</span>
        </h2>
        <Link to={`/`}>Se déconnecter</Link>
      </div>
      <BsPersonCircle className="icon" />
    </RightsideStyled>
  )
}

const RightsideStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.greyBlue};
  margin-right: 70px;
  font-family: "Open Sans", sans-serif;

  .left {
    padding-right: 10px;
    h2 {
      font-weight: 400;
      margin: 0 0 4px;
      .name {
        color: ${theme.colors.primary_burger};
        font-weight: 700;
      }
    }
    a {
      text-decoration: none;
      color: ${theme.colors.greyBlue};
      font-family: "Open Sans", sans-serif;
    }
  }

  .icon {
    font-size: 36px;
  }
`

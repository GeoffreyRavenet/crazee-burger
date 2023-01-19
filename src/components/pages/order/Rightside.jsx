import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme/index.js"

export default function Rightside() {
  const { username } = useParams()

  return (
    <RightsideStyled>
      <div className="left">
        <div>
          Hey,
          <span className="name">{username}</span>
        </div>
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
    div {
      font-weight: 16px;
      margin: 0 0 4px;
      .name {
        color: ${theme.colors.primary_burger};
        font-weight: ${theme.weights.bold};
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

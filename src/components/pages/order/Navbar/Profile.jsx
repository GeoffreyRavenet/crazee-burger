import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../../theme/index.js"

export default function Profile() {
  const { username } = useParams()

  return (
    <ProfileStyled>
      <div>
        Hey,
        <span className="name"> {username}</span>
        <Link to={`/`}>
          <small>Se déconnecter</small>
        </Link>
      </div>

      <BsPersonCircle className="icon" />
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.greyBlue};

  div {
    font-weight: 16px;
    margin-right: 10px;
    .name {
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }

    a {
      display: block;
      margin-top: 4px;
      text-decoration: none;
      color: ${theme.colors.greyBlue};
      font-family: "Open Sans", sans-serif;
      :hover {
        text-decoration: underline;
      }
    }
  }

  .icon {
    font-size: 36px;
  }
`

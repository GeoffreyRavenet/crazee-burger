import styled, { css } from "styled-components"
import { theme } from "../../theme/index.js"
import Button from "./Button.jsx"
import { TiDelete } from "react-icons/ti"

export default function Card({
  imageSource,
  title,
  price,
  onDelete,
  hasDeleteButton,
  handleSelectedCard,
  onAddToCart,
  version = "",
}) {
  return (
    <CardStyled version={version}>
      {hasDeleteButton && <div className="selected-card-inAdmin" onClick={handleSelectedCard} />}
      {hasDeleteButton && <TiDelete onClick={onDelete} className="button-delete" />}

      <div className="card-img">
        <img src={imageSource} alt="{title}" />
      </div>
      <h3>{title}</h3>
      <div className="footer-card">
        <span className="price">{price}</span>
        <Button label="Ajouter" version="normal" onClick={onAddToCart} />
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 330px;
  width: 240px;
  background: ${theme.colors.white};

  font-family: "Amatic SC", cursive;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};

  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  :hover:has(.button-delete) {
    transition: transform 0.5s ease-in-out 0s, box-shadow 0.5s ease-in-out 0s;
    transform: scale(1.05);
    box-shadow: ${theme.shadows.medium}, 0px 0px 8px #ff9a23;
  }

  .selected-card-inAdmin {
    position: absolute;
    width: 100%;
    height: 330px;
    cursor: pointer;
    :has(.button-delete) {
      color: ${theme.colors.white};
    }
  }

  .button-delete {
    position: absolute;
    right: 15px;
    top: 15px;
    color: ${theme.colors.primary};
    width: 30px;
    height: 30px;
    cursor: pointer;
    animation: 500ms ease-out 0s 1 normal none running irVrYc;

    :hover {
      color: ${theme.colors.red};
    }
    :active {
      color: ${theme.colors.primary};
    }
  }
  .card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 145px;
    margin-top: 50px;
    img {
      max-width: 200px;
      max-height: 145px;
    }
  }

  h3 {
    width: 200px;
    height: 45.6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: ${theme.fonts.size.P4};
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .footer-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    font-family: "Open Sans", cursive;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
  }

  ${({ version }) => version === "SelectedCard" && SelectedCard};
`

const SelectedCard = css`
  background: ${theme.colors.primary};
  .button-delete {
    color: ${theme.colors.white};
  }
  :has(.selected-card-inAdmin) .button-delete:active {
    color: ${theme.colors.white};
  }
  .footer-card {
    .price {
      color: ${theme.colors.white};
    }

    button {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-color: ${theme.colors.white};
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }
`

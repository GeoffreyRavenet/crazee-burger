import styled from "styled-components"
import { theme } from "../../theme/index.js"
import Button from "./Button.jsx"
import { TiDelete } from "react-icons/ti"

export default function Card({ imageSource, title, price, onDelete, hasDeleteButton }) {
  return (
    <CardStyled>
      {hasDeleteButton && <TiDelete onClick={onDelete} className="card-delete" />}

      <div className="card-img">
        <img src={imageSource} alt="{title}" />
      </div>
      <h3>{title}</h3>
      <div className="footer-card">
        <span>{price}</span>
        <Button label="Ajouter" version="normal" />
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
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .card-delete {
    position: absolute;
    right: 15px;
    top: 15px;
    color: #ffa01b;
    width: 30px;
    height: 30px;
    cursor: pointer;
    animation: 500ms ease-out 0s 1 normal none running irVrYc;
    :active,
    :hover {
      color: #e25549;
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
    font-size: 36px;
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
`

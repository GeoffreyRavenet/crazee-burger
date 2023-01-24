import styled from "styled-components"
import { theme } from "../../theme/index.js"
import PrimaryButton from "./PrimaryButton"

export default function Card({ imageSource, title, price }) {
  return (
    <CardStyled>
      <div className="card-img">
        <img src={imageSource} alt="{title}" />
      </div>
      <h3>{title}</h3>
      <div className="bottom-card">
        <span>{price}</span>
        <PrimaryButton label="Ajouter" className="button-card" />
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 36px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .bottom-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    color: ${theme.colors.primary};
    font-family: "Open Sans", cursive;
    margin-bottom: 20px;

    .button-card {
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.semiBold};
    }

    .button-card:active {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }
`

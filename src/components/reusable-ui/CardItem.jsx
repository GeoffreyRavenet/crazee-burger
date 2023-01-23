import styled from "styled-components"
import { theme } from "../../theme/index.js"
import PrimaryButton from "./PrimaryButton"

export default function CardItem({ imageSource, title, price }) {
  return (
    <CarteItemStyled>
      <div className="carte-img">
        <img src={imageSource} alt="{title}" />
      </div>
      <h3>{title}</h3>
      <div className="bottom-carte">
        <span>{price}</span>
        <PrimaryButton label="Ajouter" className="button-carte" />
      </div>
    </CarteItemStyled>
  )
}

const CarteItemStyled = styled.div`
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

  .carte-img {
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

  .bottom-carte {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    color: ${theme.colors.primary};
    font-family: "Open Sans", cursive;
    margin-bottom: 20px;

    .button-carte {
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.semiBold};
    }

    .button-carte:active {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }
`

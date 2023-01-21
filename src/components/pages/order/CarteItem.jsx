import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

export default function CarteItem({ id, imageSource, title, price }) {
  return (
    <CarteItemStyled key={id}>
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
    margin-bottom: 10px;
  }
`

import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

export default function CarteItem({ id, imageSource, title, price }) {
  return (
    <CarteItemStyled key={id}>
      <img src={imageSource} alt="{title}" />

      <h3>{title}</h3>
      <div className="bottom-carte">
        <span>{price}</span>
        <PrimaryButton label="Ajouter" className="button-carte" />
      </div>
    </CarteItemStyled>
  )
}

const CarteItemStyled = styled.div`
  background: ${theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 50px 20px 10px;
  font-family: "Amatic SC", cursive;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    width: 100%;
    height: 145px;
    object-fit: contain;
  }
  h3 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 36px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
    width: 100%;
    font-family: "Open Sans", cursive;
  }
`

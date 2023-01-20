import styled from "styled-components"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

export default function CarteItem({ id, imageSource, title, price }) {
  return (
    <CarteItemStyled key={id}>
      <img src={imageSource} alt="{title}" />

      <h3>{title}</h3>
      <div>
        <span>{price}</span>
        <PrimaryButton label="Ajouter" className="button-carte" />
      </div>
    </CarteItemStyled>
  )
}

const CarteItemStyled = styled.div`
  background: red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 50px 20px 10px;

  img {
    width: 100%;
    height: 145px;
  }
  h3 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
      margin-right: 10px;
    }
  }
`

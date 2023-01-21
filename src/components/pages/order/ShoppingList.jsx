import { useState } from "react"
import styled from "styled-components"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
import CarteItem from "./CarteItem.jsx"

export default function ShoppingList() {
  const [listCartes, setlistCartes] = useState(fakeMenu2)
  return (
    <ShoppingListStyled>
      {listCartes.map(({ id, imageSource, title, price }) => (
        <CarteItem id={id} imageSource={imageSource} title={title} price={price} />
      ))}
    </ShoppingListStyled>
  )
}
const ShoppingListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: repeat(4, 330px);
  grid-gap: 56px 76px;
  margin-top: calc(160px - 10vh);
  align-items: center;
  justify-content: center;
`

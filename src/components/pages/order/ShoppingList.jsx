import { useState } from "react"
import styled from "styled-components"
import { fakeMenu1 } from "../../../fakeData/fakeMenu"
import CarteItem from "./CarteItem.jsx"

export default function ShoppingList() {
  const [listCartes, setlistCartes] = useState(fakeMenu1)
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
  margin: calc(180px - 10vh) 150px;
`

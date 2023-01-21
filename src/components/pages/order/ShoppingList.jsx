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
  justify-items: center;
  align-items: center;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* gap: 56px 76px; */
  grid-row-gap: 60px;
  padding: 50px 100px;
  /* margin-top: calc(160px - 10vh); */
`

import React, { useContext } from "react"
import styled from "styled-components"
import BasketCard from "./BasketCard.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { checkIfProductIsClicked } from "../Menu/helper.js"

export default function BasketMenu() {
  const { basket, handleDeleteBasket, selectedProduct, isAdmin, handleSelectedCard } =
    useContext(OrderContext)

  return (
    <BasketMenuStyled>
      {basket.map(({ id, title, price, quantity, imageSource }) => (
        <BasketCard
          key={id}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          img={imageSource}
          onDelete={() => handleDeleteBasket(id)}
          isHoverable={isAdmin}
          isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
          onClick={isAdmin ? () => handleSelectedCard(id) : null}
        />
      ))}
    </BasketMenuStyled>
  )
}
const BasketMenuStyled = styled.div``

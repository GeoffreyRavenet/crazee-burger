import React, { useContext } from "react"
import styled from "styled-components"
import BasketCard from "../../../../reusable-ui/BasketCard.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import OrderContext from "../../../../../context/OrderContext.jsx"

export default function BasketMenu() {
  const { basket, handleBasketDelete } = useContext(OrderContext)

  return (
    <BasketMenuStyled>
      {basket.map(({ id, title, price, quantity, imageSource }) => (
        <BasketCard
          key={id}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          img={imageSource}
          onDelete={() => handleBasketDelete(id)}
        />
      ))}
    </BasketMenuStyled>
  )
}
const BasketMenuStyled = styled.div``

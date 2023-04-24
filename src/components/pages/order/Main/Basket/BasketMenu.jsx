import React, { useContext } from "react"
import styled from "styled-components"
import BasketCard from "../../../../reusable-ui/BasketCard.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import OrderContext from "../../../../../context/OrderContext.jsx"

export default function BasketMenu() {
  const { basket, setBasket } = useContext(OrderContext)

  const handleDelete = (idBasketProduct) => {
    const cpBasketProduct = basket
    const updateBasket = cpBasketProduct.filter((item) => item.id !== idBasketProduct)
    setBasket(updateBasket)
  }
  return (
    <BasketMenuStyled>
      {basket.map(({ id, title, price, quantity, imageSource }) => (
        <BasketCard
          key={id}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          img={imageSource}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </BasketMenuStyled>
  )
}
const BasketMenuStyled = styled.div``

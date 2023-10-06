import React, { useContext } from "react"
import styled from "styled-components"
import BasketCard from "./BasketCard.jsx"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { checkIfProductIsClicked } from "../Menu/helper.js"
import { findObjectById } from "../../../../../utils/array.js"

export default function BasketMenu() {
  const { products, basket, handleDeleteBasket, selectedProduct, isAdmin, handleSelectedCard } =
    useContext(OrderContext)

  return (
    <BasketMenuStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, products)

        return (
          <BasketCard
            {...menuProduct}
            key={menuProduct.id}
            img={menuProduct.imageSource ? menuProduct.imageSource : "/images/coming-soon.png"}
            quantity={basketProduct.quantity}
            onDelete={() => handleDeleteBasket(menuProduct.id)}
            isHoverable={isAdmin}
            isSelected={checkIfProductIsClicked(basketProduct.id, selectedProduct.id)}
            onClick={isAdmin ? () => handleSelectedCard(menuProduct.id) : null}
          />
        )
      })}
    </BasketMenuStyled>
  )
}
const BasketMenuStyled = styled.div``

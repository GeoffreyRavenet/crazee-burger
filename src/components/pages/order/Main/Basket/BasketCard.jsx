import React from "react"
import styled, { css } from "styled-components"
import { MdDeleteForever } from "react-icons/md"
import { theme } from "../../../../../theme/index.js"
import { formatPrice } from "../../../../../utils/maths.js"

export default function BasketCard({
  title,
  img,
  price,
  quantity,
  onDelete,
  isHoverable,
  isSelected,
  onClick,
}) {
  return (
    <BasketCardStyled onClick={onClick} isHoverable={isHoverable} isSelected={isSelected}>
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="infoProduct">
        <div className="left-info">
          <span className="title">{title}</span>
          <span className="price">{formatPrice(price)}</span>
        </div>

        <div className="right-info">
          <span className="quantity">x {quantity}</span>
        </div>
      </div>

      <div className="delete-product" onClick={onDelete}>
        <MdDeleteForever />
      </div>
    </BasketCardStyled>
  )
}
const BasketCardStyled = styled.div`
  position: relative;
  margin: 20px 16px;
  background: ${theme.colors.white};
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 8px 0.5em 8px 16px;
  overflow: hidden;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  :hover {
    .delete-product {
      visibility: visible;
      /*transition: width 1s;*/
      width: 76px;

      /*svg{
      transform: rotateY(360deg);
    transition: .5s;
    transition-delay: .3s;
     } */
    }
  }

  .selected-card-inAdmin {
    position: absolute;
    width: 100%;
    height: 86px;
    cursor: pointer;
  }

  .image {
    height: 70px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .infoProduct {
    margin-left: 14px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
    .left-info {
      width: 107px;
      display: grid;
      grid-gap: 5px;
      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: "Amatic SC";
        font-style: normal;
        font-weight: ${theme.fonts.weights.bold};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        min-height: 32px;
        color: ${theme.colors.dark};
      }

      .price {
        font-family: "Open Sans";
        font-style: normal;
        font-size: ${theme.fonts.weights.regular};
        font-size: ${theme.fonts.size.SM};
        line-height: 20px;
        color: ${theme.colors.primary};
      }
    }

    .right-info {
      grid-column: span 1;
      text-align: right;
      padding-right: 36px;
    }
    .quantity {
      font-family: "Open Sans";
      font-style: normal;
      font-size: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.P0};
      line-height: 22px;
      color: ${theme.colors.primary};
      text-align: right;
    }
  }

  .delete-product {
    visibility: hidden;
    background: ${theme.colors.red};
    position: absolute;
    /*width: 76px;*/
    width: 0px;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    cursor: pointer;
    :hover {
      color: black;
    }
    :active {
      color: ${theme.colors.white};
    }
  }
  ${({ isHoverable, isSelected }) => isHoverable && isSelected && SelectedCard}
`
const SelectedCard = css`
  background: ${theme.colors.primary};
  .infoProduct .left-info .price,
  .infoProduct .quantity {
    color: ${theme.colors.white};
  }
`
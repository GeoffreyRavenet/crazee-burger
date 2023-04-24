import React from "react"
import styled from "styled-components"
import { MdDeleteForever } from "react-icons/md"

export default function BasketCard({ title, img, price, quantity, onDelete }) {
  return (
    <BasketCardStyled>
      <div className="image">
        <img src={img ? img : "/images/coming-soon.png"} alt={title} />
      </div>
      <div className="infoProduct">
        <div className="left-info">
          <span className="title">{title}</span>
          <span className="price">{price}</span>
        </div>

        <div className="right-info ">
          <span className="quantity">x{quantity}</span>
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
  background: #ffffff;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 8px 0.5em 8px 16px;
  overflow: hidden;

  :hover {
    .delete-product {
      visibility: visible;
    }
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
    grid-template-columns: 70% 1fr;
    align-items: center;
    .left-info {
      width: 107px;
      display: grid;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .title {
        font-family: "Amatic SC";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;

        color: #17161a;
      }
      .price {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #ffa01b;
      }
    }
    .quantity {
      margin-left: 19px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;

      color: #ffa01b;
    }
  }

  .delete-product {
    visibility: hidden;
    background: #e25549;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 30.5px 21.5px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    :hover {
      color: black;
    }
    :active {
      color: #ffffff;
    }
  }
`

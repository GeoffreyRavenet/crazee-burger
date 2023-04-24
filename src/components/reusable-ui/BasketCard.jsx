import React from "react"
import styled from "styled-components"

export default function BasketCard({ title, img, price, quantity }) {
  return (
    <BasketCardStyled>
      <div className="image">
        <img src={img} alt={title} />
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
    </BasketCardStyled>
  )
}
const BasketCardStyled = styled.div`
  margin: 20px 16px;
  background: #ffffff;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 8px 0.5em 18px 16px;
  .image {
    height: 60px;
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
      display: grid;
      white-space: nowrap;
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
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;

      color: #ffa01b;
    }
  }
`

import styled from "styled-components"
import Footer from "./Footer.jsx"
import BasketBody from "./BasketBody.jsx"
import Total from "./Total"

export default function Basket() {
  return (
    <BasketStyled>
      <Total />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

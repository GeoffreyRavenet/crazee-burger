import styled from "styled-components"
import { theme } from "../../../../../theme/index.js"

export default function EmptyMenuClient() {
  return (
    <EmptyMenuStyled>
      <div className="EmptyMenuTitle">Victime de notre succès ! :D</div>
      <div>De nouvelles recettes sont en cours de préparation.</div>
      <div>À très vite !</div>
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Amatic SC";
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  line-height: 45px;

  color: ${theme.colors.greyBlue};
  div {
    margin-bottom: 21px;
  }
  .EmptyMenuTitle {
    font-weight: ${theme.fonts.weights.bold};
  }
`

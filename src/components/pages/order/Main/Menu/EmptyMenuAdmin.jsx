import styled from "styled-components"
import Button from "../../../../reusable-ui/Button.jsx"
import { theme } from "../../../../../theme/index.js"

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <div className="EmptyMenuTitle">Le menu est vide ?</div>
      <div>Cliquez ci-dessous pour le réinitialiser</div>
      <Button onClick={onReset} label="Générer de nouveaux produits" version="medium" />
    </EmptyMenuAdminStyled>
  )
}

const EmptyMenuAdminStyled = styled.div`
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

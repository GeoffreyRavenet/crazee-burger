import styled from "styled-components"
import Button from "../../../../reusable-ui/Button.jsx"

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
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;

  color: #747b91;
  div {
    margin-bottom: 21px;
  }
  .EmptyMenuTitle {
    font-weight: 700;
  }
`

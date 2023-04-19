import styled from "styled-components"
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx"

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <div className="EmptyMenuTitle">Le menu est vide ?</div>
      <div>Cliquez ci-dessous pour le réinitialiser</div>
      <PrimaryButton
        onClick={onReset}
        label="Générer de nouveaux produits"
        className="button-emptyAdmin"
      />
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
  .button-emptyAdmin {
    padding: 19px 25px 19px 25px;
    height: 50px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
  }
`

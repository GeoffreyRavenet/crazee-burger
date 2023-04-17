import React from "react"
import styled from "styled-components"
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx"

export default function EmptyMenu() {
  return (
    <EmptyMenuStyled>
      <h2>Le menu est vide ?</h2>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <PrimaryButton label="Générer de nouveaux produits" />
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  font-family: "Amatic SC";
  font-style: normal;
  font-size: 36px;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  line-height: 0.5;
  color: #747b91;
  h2 {
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
  }
`

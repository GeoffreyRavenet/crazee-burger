import styled from "styled-components"

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
